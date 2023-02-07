/*
 * @Author: jasper
 * @Date: 2023-02-07 15:56:23
 * @LastEditors: jasper
 * @LastEditTime: 2023-02-07 16:04:09
 * @Description:
 */
module.exports = {
    globals: {
        window: true,
    },
    parser: '@babel/eslint-parser',
    extends: ['airbnb', 'airbnb/hooks', 'plugin:prettier/recommended'],
    plugins: ['react', 'react-hooks', 'prettier'],
    env: {
        browser: true,
        es2021: true, //支持最新的js变量，如果Set集合等
    },
    parserOptions: {
        requireConfigFile: false,
        // 默认值是5，可以设置为3、5、6、7、8、9、10，用来指定使用哪一个ECMAScript版本的语法。也可以设置基于年份的JS标准，比如2015(ECMA 6)
        ecmaVersion: 12, //支持最新的js语法，这里跟新特性
        sourceType: 'module', //设置为 "script" (默认) 或 "module"（ECMAScript 模块）
        //该对象指示你想使用的额外的语言特性
        ecmaFeatures: {
            //表示你想使用的额外的语言特性
            // 添加ES特性支持，使之能够识别ES6语法
            jsx: true, //jsx不等于react
            //支持修饰符
            legacyDecorators: true,
            //支持对象的扩展运算符
            experimentalObjectRestSpread: true,
        },
    },
    rules: {
        semi: [0, 'never'],
        'no-console': 0,
        'comma-dangle': [2, 'always-multiline'],
        'max-len': 0,
        'react/jsx-first-prop-new-line': 0,
        'react/jsx-filename-extension': 0,
        'space-before-function-paren': 0,
        'no-unused-expressions': [
            0,
            {
                allowShortCircuit: true,
                allowTernary: true,
            },
        ],
        'arrow-body-style': [0, 'never'],
        'func-names': 0,
        'prefer-const': 0,
        'no-extend-native': 0,
        'no-param-reassign': 0,
        'no-restricted-syntax': 0,
        'no-eval': 0,
        'no-continue': 0,
        'react/jsx-no-bind': 0,
        'no-unused-vars': [2, { ignoreRestSiblings: true }],
        'no-underscore-dangle': 0,
        'global-require': 0,
        'import/no-unresolved': 0,
        'import/extensions': 0,
        'jsx-a11y/href-no-hash': 0,
        'react/no-array-index-key': 0,
        'react/require-default-props': 0,
        'react/forbid-prop-types': 0,
        'react/no-string-refs': 0,
        'react/no-find-dom-node': 0,
        'react/jsx-props-no-spreading': 0,
        'react/prop-types': 0,
        'import/no-extraneous-dependencies': 0,
        'import/prefer-default-export': 0,
        'react/no-danger': 0,
        'jsx-a11y/no-static-element-interactions': 0,
        'jsx-a11y/anchor-is-valid': 0,
        'react/destructuring-assignment': 0,
        'react/sort-comp': 0,
        'no-shadow': 0,
        'class-methods-use-this': 0,
        'no-plusplus': 0,
        'react/no-access-state-in-setstate': 0,
        'no-restricted-globals': 0,
        'jsx-a11y/click-events-have-key-events': 0,
    },
};
