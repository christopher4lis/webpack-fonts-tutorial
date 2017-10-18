module.exports = {
    entry: './src/app.js',
    output: {
        path: __dirname + '/dist',
        filename: 'build.js',
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            },
        ],
    },
    watch: true,
};