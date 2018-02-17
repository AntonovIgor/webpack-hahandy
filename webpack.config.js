var path = require('path');

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
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};