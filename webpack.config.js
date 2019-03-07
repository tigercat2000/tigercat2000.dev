const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, 'src/app/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
        {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader',
                'postcss-loader',
            ]
        },
        {
            test: /\.less$/,
            use: [
                'style-loader',
                'css-loader',
                'postcss-loader',
                'less-loader'
            ]
        },
        {
            test: /\.(png|svg|jpg|gif)$/,
            use: [
                'file-loader'
            ]
        },
        {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: [
                'file-loader'
            ]
        }]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src/public/index.html'),
            inject: 'body'
        }),
        new CopyPlugin([
            { from: 'src/other' },
        ])
    ],
    devServer: {
        contentBase: './src/public',
        port: 8080
    }
};