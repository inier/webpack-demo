var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        inline: './src/script/main.js',
        a: './src/script/a.js',
        b: './src/script/b.js',
        c: './src/script/c.js'
    },
    output: {
        publicPath: '../', //http://cdn.com
        path: path.resolve(__dirname, './dist/multi'),
        filename: 'js/entry-[name].js', //-[chunkhash]
        chunkFilename: 'js/[id].[name].bundle.js'
    },
    plugins:[
        new htmlWebpackPlugin({
            filename: 'a/index.html',
            template:'index.1.html',            
            excludeChunks:['b','c'],
            title: "webpack Page A",
            inject: false
        }),
        new htmlWebpackPlugin({
            filename: 'b/index.html',
            template:'index.1.html',
            excludeChunks:['a','c'],
            title: "webpack Page B",
            inject: false
        }),
        new htmlWebpackPlugin({
            filename: 'c/index.html',
            template:'index.1.html',
            excludeChunks:['a','b'],
            title: "webpack Page C",
            inject: false
        })
    ]
};