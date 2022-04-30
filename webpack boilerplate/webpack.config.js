const path = require('path');

module.exports = {
    entry: './src/index.js',
    devtool: 'inline-source-map',
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        }

    },
    output: {
        path: path.resolve(__dirname, 'dist/assets'),
        filename: 'bundle.js'
    },
};