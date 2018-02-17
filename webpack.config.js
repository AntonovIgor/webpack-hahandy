const path = require('path');
const webpack = require('webpack');
const extractTextWebpackPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './source/app.js',
    output: {
        path: path.resolve(__dirname, 'js'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,                
                exclude: '/node_modules',
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015'],
                            plugins: ['lodash']
                        }                        
                    }
                ],                
            },
            {
                test: /\.css$/,
                use: extractTextWebpackPlugin.extract({
                    fallback: 'style-loader',
                    use: {
                        loader: 'css-lпoader',
                        options: {
                            minimize: true
                        }
                    }
                })
            }
        ]
    },
    plugins: [
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
        new extractTextWebpackPlugin('post.css'),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"'
        })
    ],
    stats: {
        colors: true
    },
    devtool: 'source-map'
};