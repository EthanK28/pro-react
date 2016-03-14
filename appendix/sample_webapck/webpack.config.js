var webpack = require('webpack');

module.exports = {

    entry: __dirname + "/app/main.js",
    output: {
        path: __dirname+"/public",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.json$/,
                loader: "json"
            } ,
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                presets: ['es2015','react']
                }
            },
            {
                test: /\.css$/,
                loader: 'style!css?modules!postcss'
            }
        ]
    },
    postcss: [
        require('autoprefixer')
    ],
    plugins: [
        new webpack.BannerPlugin("Copyright Flying Unicorns inc.")
    ],
    devServer: {
        contentBase: "./public",
        colors: true,
        historyApiFallback: true,
        inline:true
    }
}
