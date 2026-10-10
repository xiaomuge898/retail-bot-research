const traverse = require("@babel/traverse").default;

const DECODER_OBJECT_NAME = "_ᖉᕾᖄᕸ";
const DECODER_METHOD_NAME = "$_Cc";
const DECODER_TABLE_NAME = "$_AD";

/**
 * 判断成员表达式是否引用 Program 级解码器对象的指定属性。
 *
 * @param {import("@babel/traverse").NodePath} astPath 成员表达式路径。
 * @param {string} propertyName 属性名。
 * @returns {boolean} 是否为目标属性。
 */
function isRootDecoderProperty(astPath, propertyName) {
    if (!astPath.isMemberExpression({ computed: false })
        || !astPath.get("object").isIdentifier({ name: DECODER_OBJECT_NAME })
        || !astPath.get("property").isIdentifier({ name: propertyName })) {
        return false;
    }

    const objectBinding = astPath.scope.getBinding(DECODER_OBJECT_NAME);
    return Boolean(
        objectBinding?.path.isFunctionDeclaration()
        && objectBinding.scope.path.isProgram(),
    );
}

/**
 * 获取变量声明的绑定。
 *
 * @param {import("@babel/traverse").NodePath} declaratorPath VariableDeclarator 路径。
 * @returns {import("@babel/traverse").Binding | undefined} 变量绑定。
 */
function getDeclaratorBinding(declaratorPath) {
    const idPath = declaratorPath.get("id");
    if (!idPath.isIdentifier()) {
        return undefined;
    }
    return declaratorPath.scope.getBinding(idPath.node.name);
}

/**
 * 从直接解码器声明中识别完整且已经无外部引用的脚手架。
 *
 * @param {import("@babel/traverse").NodePath} directDeclaratorPath 直接解码器变量声明。
 * @returns {{ declarators: import("@babel/traverse").NodePath[], shiftStatement: import("@babel/traverse").NodePath } | null} 可删除分组。
 */
function collectRemovableScaffold(directDeclaratorPath) {
    const directBinding = getDeclaratorBinding(directDeclaratorPath);
    if (!directBinding?.constant || directBinding.referencePaths.length !== 1) {
        return null;
    }

    const directReferencePath = directBinding.referencePaths[0];
    const concatCallPath = directReferencePath.parentPath;
    if (!concatCallPath.isCallExpression()
        || concatCallPath.get("arguments").length !== 1
        || concatCallPath.get("arguments.0").node !== directReferencePath.node) {
        return null;
    }

    const concatCalleePath = concatCallPath.get("callee");
    if (!concatCalleePath.isMemberExpression({ computed: false })
        || !concatCalleePath.get("property").isIdentifier({ name: "concat" })) {
        return null;
    }

    const markerArrayPath = concatCalleePath.get("object");
    const markerElements = markerArrayPath.isArrayExpression()
        ? markerArrayPath.get("elements")
        : [];
    if (markerElements.length !== 1 || !markerElements[0].isStringLiteral()) {
        return null;
    }

    const containerDeclaratorPath = concatCallPath.parentPath;
    if (!containerDeclaratorPath.isVariableDeclarator()
        || containerDeclaratorPath.get("init").node !== concatCallPath.node) {
        return null;
    }

    const containerBinding = getDeclaratorBinding(containerDeclaratorPath);
    if (!containerBinding?.constant || containerBinding.referencePaths.length !== 3) {
        return null;
    }

    let aliasDeclaratorPath;
    let markerDeclaratorPath;
    let shiftStatementPath;

    for (const referencePath of containerBinding.referencePaths) {
        const memberPath = referencePath.parentPath;
        if (!memberPath.isMemberExpression() || memberPath.get("object").node !== referencePath.node) {
            return null;
        }

        const propertyPath = memberPath.get("property");
        if (memberPath.node.computed && propertyPath.isNumericLiteral({ value: 1 })) {
            const declaratorPath = memberPath.parentPath;
            if (aliasDeclaratorPath
                || !declaratorPath.isVariableDeclarator()
                || declaratorPath.get("init").node !== memberPath.node) {
                return null;
            }
            aliasDeclaratorPath = declaratorPath;
            continue;
        }

        if (memberPath.node.computed && propertyPath.isNumericLiteral({ value: 0 })) {
            const declaratorPath = memberPath.parentPath;
            if (markerDeclaratorPath
                || !declaratorPath.isVariableDeclarator()
                || declaratorPath.get("init").node !== memberPath.node) {
                return null;
            }
            markerDeclaratorPath = declaratorPath;
            continue;
        }

        if (!memberPath.node.computed && propertyPath.isIdentifier({ name: "shift" })) {
            const callPath = memberPath.parentPath;
            const statementPath = callPath.parentPath;
            if (shiftStatementPath
                || !callPath.isCallExpression()
                || callPath.node.arguments.length !== 0
                || !statementPath.isExpressionStatement()) {
                return null;
            }
            shiftStatementPath = statementPath;
            continue;
        }

        return null;
    }

    if (!aliasDeclaratorPath || !markerDeclaratorPath || !shiftStatementPath) {
        return null;
    }

    const aliasBinding = getDeclaratorBinding(aliasDeclaratorPath);
    const markerBinding = getDeclaratorBinding(markerDeclaratorPath);
    if (!aliasBinding?.constant
        || aliasBinding.referencePaths.length !== 0
        || !markerBinding?.constant
        || markerBinding.referencePaths.length !== 0) {
        return null;
    }

    return {
        declarators: [
            directDeclaratorPath,
            containerDeclaratorPath,
            aliasDeclaratorPath,
            markerDeclaratorPath,
        ],
        shiftStatement: shiftStatementPath,
    };
}

/**
 * 按 VariableDeclaration 分组删除声明项，避免留下空声明。
 *
 * @param {import("@babel/traverse").NodePath[]} declaratorPaths 待删除声明项。
 */
function removeDeclarators(declaratorPaths) {
    const groupedPaths = new Map();
    for (const declaratorPath of declaratorPaths) {
        const declarationPath = declaratorPath.parentPath;
        const paths = groupedPaths.get(declarationPath) ?? [];
        paths.push(declaratorPath);
        groupedPaths.set(declarationPath, paths);
    }

    for (const [declarationPath, paths] of groupedPaths) {
        if (declarationPath.node.declarations.length === paths.length) {
            declarationPath.remove();
            continue;
        }

        paths
            .sort((left, right) => Number(right.key) - Number(left.key))
            .forEach((declaratorPath) => declaratorPath.remove());
    }
}

/**
 * 判断路径是否位于指定祖先路径内部。
 *
 * @param {import("@babel/traverse").NodePath} astPath 待检查路径。
 * @param {import("@babel/traverse").NodePath} ancestorPath 祖先路径。
 * @returns {boolean} 是否为后代路径。
 */
function isDescendantOf(astPath, ancestorPath) {
    for (let currentPath = astPath.parentPath; currentPath; currentPath = currentPath.parentPath) {
        if (currentPath === ancestorPath) {
            return true;
        }
    }
    return false;
}

/**
 * 获取 Program 顶层属性赋值语句。
 *
 * @param {import("@babel/traverse").NodePath[]} memberPaths 属性访问路径。
 * @returns {import("@babel/traverse").NodePath | null} 赋值语句路径。
 */
function getTopLevelAssignmentStatement(memberPaths) {
    const assignmentMembers = memberPaths.filter((memberPath) => {
        const assignmentPath = memberPath.parentPath;
        return assignmentPath.isAssignmentExpression({ operator: "=" })
            && assignmentPath.get("left").node === memberPath.node
            && assignmentPath.parentPath.isExpressionStatement()
            && assignmentPath.parentPath.parentPath.isProgram();
    });

    return assignmentMembers.length === 1
        ? assignmentMembers[0].parentPath.parentPath
        : null;
}

/**
 * 在所有局部脚手架移除后，删除无用的字符串表和字符串解码函数。
 *
 * @param {import("@babel/types").File} ast Babel AST。
 * @returns {number} 删除的顶层运行时代码段数量。
 */
function removeUnusedDecoderRuntime(ast) {
    const decoderMemberPaths = [];
    const tableMemberPaths = [];

    traverse(ast, {
        MemberExpression(astPath) {
            if (isRootDecoderProperty(astPath, DECODER_METHOD_NAME)) {
                decoderMemberPaths.push(astPath);
            } else if (isRootDecoderProperty(astPath, DECODER_TABLE_NAME)) {
                tableMemberPaths.push(astPath);
            }
        },
    });

    const decoderStatementPath = getTopLevelAssignmentStatement(decoderMemberPaths);
    const tableStatementPath = getTopLevelAssignmentStatement(tableMemberPaths);
    if (!decoderStatementPath || !tableStatementPath) {
        return 0;
    }

    const decoderHasExternalReferences = decoderMemberPaths.some(
        (memberPath) => !isDescendantOf(memberPath, decoderStatementPath),
    );
    const tableHasExternalReferences = tableMemberPaths.some(
        (memberPath) => !isDescendantOf(memberPath, tableStatementPath)
            && !isDescendantOf(memberPath, decoderStatementPath),
    );
    if (decoderHasExternalReferences || tableHasExternalReferences) {
        return 0;
    }

    decoderStatementPath.remove();
    tableStatementPath.remove();
    return 2;
}

/**
 * 删除已经完成字符串还原后残留的解码器脚手架。
 *
 * @param {import("@babel/types").File} ast Babel AST。
 * @returns {{ removedScaffoldCount: number, removedRuntimeCount: number }} 清理统计。
 */
function removeDecoderScaffolding(ast) {
    let programPath;
    traverse(ast, {
        Program(astPath) {
            programPath = astPath;
            astPath.scope.crawl();
            astPath.stop();
        },
    });

    const removableScaffolds = [];
    traverse(ast, {
        VariableDeclarator(astPath) {
            const initPath = astPath.get("init");
            if (!isRootDecoderProperty(initPath, DECODER_METHOD_NAME)) {
                return;
            }

            const scaffold = collectRemovableScaffold(astPath);
            if (scaffold) {
                removableScaffolds.push(scaffold);
            }
        },
    });

    removableScaffolds.forEach(({ shiftStatement }) => shiftStatement.remove());
    removeDeclarators(removableScaffolds.flatMap(({ declarators }) => declarators));

    programPath.scope.crawl();
    const removedRuntimeCount = removeUnusedDecoderRuntime(ast);
    return {
        removedScaffoldCount: removableScaffolds.length,
        removedRuntimeCount,
    };
}

module.exports = {
    removeDecoderScaffolding,
};
