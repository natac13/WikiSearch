'use strict';

var path = require('path');

var buildPath = path.join(__dirname, 'public', 'assets');

module.exports = {
    entry: [
        // sets up an ES6-ish environment
        'babel-polyfill',
        // the main application script
        './app/App.js'
    ],
    output: {
        path: buildPath,
        filename: 'bundle.js',
        publicPath: '/assets/' // need for hot reload. or hit refresh each time
    },
    devServer: {
        inline: true,
        progress: true,
        contentBase: 'public/',


        // parse host and port from env so this is easy
        // to customize
        host: process.env.HOST,
        port: process.env.PORT
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                include: [path.resolve(__dirname, 'app')],
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    cacheDirectory: true,
                    plugins: ['transform-runtime'],
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};