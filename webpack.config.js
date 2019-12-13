const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    mode: "development",
    entry: ['./src/index.js'],
    module: {
        rules: [
            { test: /\.vue$/, loader: 'vue-loader', exclude: '/node_modules/'},
            { test: /\.css$/, use: [ 'style-loader', 'css-loader'] },
            //{ test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] } //这个方式将css打包进了js文件
            { test: /\.scss$/, use: ExtractTextPlugin.extract({use:['css-loader', 'sass-loader'], fallback: 'style-loader'})}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'vMeeting Project',
            template: './src/index.html'
        }),
        new VueLoaderPlugin()
        // new webpack.LoaderOptionPlugin({
        //     test: /\.vue$/,
        //     options: [
        //         rules : {use:'vue-loader'}
        //     ]
        // })
    ],
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            'vue$': 'vue/dist/vue.common.js'
        }
    }
}