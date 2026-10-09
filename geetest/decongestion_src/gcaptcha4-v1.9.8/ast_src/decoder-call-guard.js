const types = require("@babel/types");

const DECODER_OBJECT_NAME = "_ᖉᕾᖄᕸ";
const DECODER_METHOD_NAME = "$_Cc";
const bindingResultCache = new WeakMap();

/**
 * 判断节点是否为全局字符串解码器 `_ᖉᕾᖄᕸ.$_Cc`。
 *
 * @param {import("@babel/traverse").NodePath} astPath 成员表达式路径。
 * @returns {boolean} 是否为目标解码器成员表达式。
 */
function isDecoderMemberExpression(astPath) {
    if (!astPath.isMemberExpression({ computed: false })
        || !astPath.get("object").isIdentifier({ name: DECODER_OBJECT_NAME })
        || !astPath.get("property").isIdentifier({ name: DECODER_METHOD_NAME })) {
        return false;
    }

    const objectBinding = astPath.scope.getBinding(DECODER_OBJECT_NAME);
    return Boolean(
        objectBinding?.path.isFunctionDeclaration()
        && objectBinding.scope.path.isProgram(),
    );
}

/**
 * 判断变量是否为混淆器生成的解码器别名容器。
 * 目标形态：`const aliases = ["标记"].concat(decoder)`。
 *
 * @param {import("@babel/traverse").Binding | undefined} binding 变量绑定。
 * @param {Set<import("@babel/traverse").Binding>} visiting 当前递归链。
 * @returns {boolean} 容器第二项是否来自可信解码器。
 */
function isDecoderAliasContainer(binding, visiting) {
    if (!binding?.constant || !binding.path.isVariableDeclarator()) {
        return false;
    }

    const initPath = binding.path.get("init");
    if (!initPath.isCallExpression()) {
        return false;
    }

    const calleePath = initPath.get("callee");
    const argumentPaths = initPath.get("arguments");
    if (!calleePath.isMemberExpression({ computed: false })
        || !calleePath.get("property").isIdentifier({ name: "concat" })
        || argumentPaths.length !== 1
        || !argumentPaths[0].isIdentifier()) {
        return false;
    }

    const sourcePath = calleePath.get("object");
    if (!sourcePath.isArrayExpression()) {
        return false;
    }
    const elements = sourcePath.get("elements");
    if (elements.length !== 1 || !elements[0].isStringLiteral()) {
        return false;
    }

    const decoderBinding = argumentPaths[0].scope.getBinding(argumentPaths[0].node.name);
    return isDecoderBinding(decoderBinding, visiting);
}

/**
 * 递归验证变量绑定是否可追溯到已知字符串解码器。
 *
 * @param {import("@babel/traverse").Binding | undefined} binding 待验证绑定。
 * @param {Set<import("@babel/traverse").Binding>} [visiting] 当前递归链。
 * @returns {boolean} 是否为可信解码器绑定。
 */
function isDecoderBinding(binding, visiting = new Set()) {
    if (!binding?.constant || !binding.path.isVariableDeclarator()) {
        return false;
    }
    if (bindingResultCache.has(binding)) {
        return bindingResultCache.get(binding);
    }
    if (visiting.has(binding)) {
        return false;
    }

    visiting.add(binding);
    const initPath = binding.path.get("init");
    let result = isDecoderMemberExpression(initPath);

    if (!result && initPath.isIdentifier()) {
        result = isDecoderBinding(initPath.scope.getBinding(initPath.node.name), visiting);
    }

    if (!result && initPath.isMemberExpression({ computed: true })) {
        const objectPath = initPath.get("object");
        const propertyPath = initPath.get("property");
        if (objectPath.isIdentifier() && propertyPath.isNumericLiteral({ value: 1 })) {
            const containerBinding = objectPath.scope.getBinding(objectPath.node.name);
            result = isDecoderAliasContainer(containerBinding, visiting);
        }
    }

    visiting.delete(binding);
    bindingResultCache.set(binding, result);
    return result;
}

/**
 * 判断调用是否可以安全地按静态字符串索引解码。
 *
 * @param {import("@babel/traverse").NodePath<import("@babel/types").CallExpression>} astPath 调用路径。
 * @returns {boolean} 仅当函数绑定可信且参数为单一数字字面量时返回 true。
 */
function isStaticDecoderCall(astPath) {
    const { callee, arguments: args } = astPath.node;
    if (!types.isIdentifier(callee)
        || args.length !== 1
        || !types.isNumericLiteral(args[0])) {
        return false;
    }

    return isDecoderBinding(astPath.scope.getBinding(callee.name));
}

module.exports = {
    isStaticDecoderCall,
};
