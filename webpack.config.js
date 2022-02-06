const path = require('path');

module.exports = {
    
    mode: 'development',

    entry : {
        main : './public/js/main.js',
    },

    devtool: 'inline-source-map',

    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                  presets: [
                    ['@babel/preset-env']
                  ],
                }
            }
          }
        ] 
    },

    devServer: {
        static: path.resolve(__dirname,'public'),
        compress: true,
        port: 9000,
    },

    output : {
        filename : '[name].js',
        // filename : '[name].[contenthash].js',
        path : path.resolve(__dirname,'public','dist'),
        clean : true
    },

    optimization: {
        moduleIds: 'deterministic',
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
              vendor: {
                test: /[\\/]node_modules[\\/]/,
                name: 'vendors',
                chunks: 'all',
              },
            },
        },
    },
}