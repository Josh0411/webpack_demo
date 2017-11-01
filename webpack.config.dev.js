const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const ROOT_PATH = path.join(__dirname);



module.exports = {
    devtool: "source-map",
    entry: {
        index: [
            './src/js/index.js',
            'webpack-dev-server/client?http://localhost:8080'
        ]
    },
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(ROOT_PATH, 'build')
    },
    module: {

        rules: [{
            test: /\.(js|jsx)$/,
            exclude: path.resolve(__dirname, 'node_modules'),
            use: [{
                loader: 'babel-loader'
            }]
        }]
    },
    resolve: {
        alias: {
            utilsPath: path.resolve(__dirname, 'src/js/utils'),
            bisPath: path.resolve(__dirname, 'src/js')
        }
    },

    plugins: [
        new cleanWebpackPlugin(path.resolve(__dirname, 'build'), {
            verbose: true,
            path: __dirname
        }),
        new LodashModuleReplacementPlugin({
            path: true,
            flattening: true
        }),
        new UglifyJSPlugin({
            uglifyOptions: {
                ie8: false,
                output: {
                    comments: false,
                    beautify: false,
                },
                mangle: {
                    keep_fnames: true
                },
                compress: {
                    warnings: false,
                    drop_console: false
                }
            }
        }),
        new htmlWebpackPlugin({
            filename: __dirname + '/build/index.html',
            template: __dirname + '/src/index.html',
            hash: true,
            chunks: ['index']
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'build'),
        port: 8988,
        stats: {
            colors: true
        }
    }
};
