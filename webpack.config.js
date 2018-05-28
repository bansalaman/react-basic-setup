const path = require('path');
const HtmlWEbpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output:  {
        path: path.join(__dirname, './dist'),
        filename: 'index_bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins: [
        new HtmlWEbpackPlugin({
            template: './src/index.html'
        })
    ]
}