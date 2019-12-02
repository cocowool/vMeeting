const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    mode: "development",
    entry: ['./src/index.js','./src/css/main.scss'],
    module: {
        rules: [
            { test: /\.vue$/, loader: 'vue-loader', exclude: '/node_modules/'},
            { test: /\.css$/, use: [ 'style-loader', 'css-loader'] },
            { test: /\.sass$/, use: ['style-loader', 'css-loader', 'sass-loader'] }
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