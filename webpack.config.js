module.exports = {
    entry: "./entry.jsx",
    output: {
        path: __dirname + '/dist',
        filename: "bundle.js"
    },
    devtool: 'source-map',
    module: {
        loaders: [
            { test: /\.scss$/, loader: "style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!sass" },
            { test: /\.jsx$/, loader: "babel" },
            {
                test: /.*\.(gif|png|jpe?g|svg)$/i,
                loaders: [
                    'file?hash=sha512&digest=hex&name=static/[hash].[ext]',
                    'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}'
                ]
            }
        ]
    }
};
