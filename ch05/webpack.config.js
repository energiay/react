var path = require('path');
 
module.exports = {
    mode: "none",
    entry: "./app/app.jsx",
    output:{
        path: path.resolve(__dirname, './public'),
        publicPath: '/public/',
        filename: "prod.js"
    },
    module:{
        rules:[
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: "babel-loader",
                options: {
                    presets:["@babel/preset-env", "@babel/preset-react"]
                }
            }
        ]
    }
}