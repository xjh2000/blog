const path = require('path')

function resolve(dir) {
    return path.join(__dirname, '.', dir)
}


/**
 * 用于webstorm辅助识别module-alias里面的别名,没有实际作用。
 * 需要手动指定:语言框架->Javascript->Webpack->手动到当前js文件
 * @type {{resolve: {extensions: string[], alias: {'@': string}}, context: string}}
 */
const pathAlias = {
    context: path.resolve(__dirname, './'), //
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            '@': resolve('app'),
            "@route": resolve('route'),
            "@config": resolve('config'),
            "@utils": resolve('utils')
        }
    }
}

module.exports = {
    ...pathAlias
}