'use strict';

var webpack = require('webpack');

module.exports = {
    entry: {
        bundle: [
            './src/index.js'
        ]
    },

    output: {
        path: __dirname + '/www/assets'
        , filename: '[name].js'
    },

    resolve: {
        // Absolute path that contains modules
        root: __dirname,

        extensions: ['', '.js'],

        // Directory names to be searched for modules
        modulesDirectories: ['src', 'node_modules'],

        alias: {
            // 'aaa': __dirname + '/laaa.min.js'
        }
    },
    
    module: {
        loaders: [
            {test: /\.jsx?$/, loaders: ['babel'], exclude: /node_modules/},
            {test: /\.scss$/, loaders: ['style', 'css', 'autoprefixer', 'sass']},
            {test: /\.css$/, loaders: ['style', 'css', 'autoprefixer']},
            {test: /\.json$/, loaders: ['json']},
            {test: /\.png$/, loader: 'url?limit=8192&mimetype=image/png'},
            {test: /\.jpe?g$/, loader: 'url?limit=8192&mimetype=image/jpg'},
            {test: /\.gif$/, loader: 'url?limit=8192&mimetype=image/gif'},
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=8192&mimetype=image/svg+xml'},
            {test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=8192&mimetype=application/font-woff2'},
            {test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=8192&mimetype=application/font-woff'},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=8192&mimetype=application/octet-stream'},
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
            {test: /\.md$/, loaders: ['html', 'markdown']}
        ]
    }
};
