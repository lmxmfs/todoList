// 默认配置文件、webpack配置
// webpack 只能打包 js 文件、对于后缀名为 vue 的文件不能打包、要通过 vue-loader 来打包 vue 文件

// 导入 path 模块
const path = require('path')
// 导入 vue-loader 插件
const VueLoaderPlugin = require('vue-loader/lib/plugin')
// 导入 html-webpack-plugin 插件
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 导入 clean-webpack-plugin 插件
const { CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
    // 打包入口
    entry: {
        app: './src/index.js'
    },
    // 打包出口
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../dist'),
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.vue$/,  // 正则表达式
                loader: 'vue-loader'    // 以 vue 结尾的文件用 vue-loader 打包
            },
            // {
            //     test: /\.(jpg|jpeg|png|svg)$/,
            //     loader: 'file-loader',
            //     options: {
            //         name: '[name].[ext]'
            //     }
            // },
            {
                test: /\.(jpg|jpeg|png|svg)$/,
                loader: 'url-loader',
                options: {
                    name: '[name].[ext]',
                    limit: 2048,
                    // url-loader 默认采用 ES Modules 规范进行解析，但 html-loader 引入图片使用的是 CommonJS 规范
                    // 解决办法：关闭 url-loader 默认规范，强制 url-loader 使用 CommonJS 规范进行打包
                    esModule: false
                },
                // 当在 webpack 5 中使用旧的 assets loader（如 file-loader/url-loader/raw-loader 等）和 asset 模块时，这可能会导致 asset 重复，
                // 所以想阻止 webpack 5 内置的 asset 模块的处理，可以通过将 asset 模块的类型设置为 ‘javascript/auto’ 来解决。
                type: 'javascript/auto'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']     // 从右到左，从下到上顺序依次执行    
            },
            // stylus: stylus 文件预处理程序，将 stylus 编译成 css 格式 
            // stylus-loader: 加载 stylus 文件，调用 stylus 预处理程序形成 css 文件
            {
                test: /\.styl(us)?$/,
                use: ['vue-style-loader', 'css-loader', 'postcss-loader', 'stylus-loader']
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    // 插件 —— 在某个时间点、自动执行的处理程序（类似于 vue 的生命周期函数）
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin(
            {
                template: './index.html',
                hash: true  // 为 CSS 文件和 JS 文件引入时，添加唯一的 hash，破环缓存非常有用
            }
        ),
        new CleanWebpackPlugin()  // 在打包之前执行
    ],
    // vue 打包会生成三个文件
    // · runtime only 的文件 vue.common.js
    // · compiler only 的文件 compiler.js
    // · runtime + compiler 的文件 vue.js
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js',
            '@': path.resolve(__dirname, '../src'),
            'images': path.resolve(__dirname, '../src/assets/images'),
            'styles': path.resolve(__dirname, '../src/assets/styles'),
            'svg': path.resolve(__dirname, '../src/assets/svg'),
        }
    }
}