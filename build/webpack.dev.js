// 导入公共配置
const baseConfig = require('./webpack.base')
const { merge } = require('webpack-merge')
// 导入 webpack 插件
const webpack = require('webpack')

const devConfig = {
    target: 'web',
    mode: 'development',
    devServer: {
        static: './dist',
        open: true,
        hot: true
    },
    devtool: 'eval-nosources-cheap-module-source-map',    // 建立打包后的文件和源代码所在行的映射、方便在开发时快速定位问题源代码行
    // 插件 —— 在某个时间点、自动执行的处理程序（类似于 vue 的生命周期函数）
    plugins: [
        new webpack.HotModuleReplacementPlugin()    // 模块热替换
    ]
}

module.exports = merge(baseConfig, devConfig)