# -*- coding: utf-8 -*-
import os
from setuptools import setup, find_packages
def readme():
    if os.path.exists("README.md"):
        return open("README.md", encoding="utf-8").read()
    return "No description available."

setup(
    name='walmartBot',           # 包的名字
    version='0.0.3',             # 包的版本
    packages=find_packages(),    # 自动寻找包中的模块
    install_requires=[           # 依赖的其他包
        'setuptools',
        'requests',
        'PySocks',
        'curl_cffi>=0.13.0'
    ],
    author='Xiaomu',
    author_email='jiangongfang@foxmail.com',
    description="retail-bot-research",
    long_description=readme(),
    long_description_content_type='text/markdown',
    url='https://www.jiangongfang.top',
    classifiers=[
        'Programming Language :: Python :: 3.8',
        'Programming Language :: Python :: 3.9',
        'Programming Language :: Python :: 3.10',
        'Programming Language :: Python :: 3.11',
        'Programming Language :: Python :: 3.12',
        'Programming Language :: Python :: 3.13',
        'License :: OSI Approved :: MIT License',
        'Operating System :: OS Independent',
    ],
    license="MIT",
    python_requires='<=3.13'
)
