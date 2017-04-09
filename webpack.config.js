var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');

var LIB = path.resolve(__dirname, 'node_modules');
var SRC = path.resolve(__dirname, 'src');
var DIST = path.resolve(__dirname, 'dist/app');
module.exports = {
    //context: _dirname,
    entry: './src/app.js',
    output: {
        path: DIST,
        filename: 'js/app-bundle.js' //-[chunkhash]
    },
    module: {
        loaders: [
            {
                test: /\.(html|html)$/,
                loader: 'html-loader'
            }, {
                test: /\.(tpl|ejs)$/,
                loader: 'ejs-loader'
            }, {
                test: /\.css$/,
                //?importLoaders=1用于处理css文件中@import的文件被后续的第几个loader处理，这里的1即指postcss-loader
                loader: 'style-loader!css-loader?importLoaders=1!postcss-loader'
                //loaders:[]
            }, {
                test: /\.less$/,
                loader: 'style-loader!css-loader!postcss-loader!less-loader'
            }, {
                test: /\.(scss|sass)$/,
                loader: 'style-loader!css-loader!postcss-loader!sass-loader'
            }, {
                test: /\.jsx?$/,
                exclude: [LIB],
                include: [SRC],
                loader: 'babel-loader'
            }, {
                test: /\.(png|jpe?g|gif|svg)$/i,
                loaders: ['url-loader?limit=10000&name=assets/[name]-[hash:4].[ext]', 'image-webpack-loader']
            }
        ]
    },
    imageWebpackLoader: {
        mozjpeg: {
            quality: 65
        },
        pngquant: {
            quality: "65-90",
            speed: 4
        },
        svgo: {
            plugins: [
                {
                    removeViewBox: false
                }, {
                    removeEmptyAttrs: false
                }
            ]
        }
    },
    postcss: [require('autoprefixer')({browsers: ['last 5 versions']})],
    plugins: [new htmlWebpackPlugin({filename: 'app.html', template: 'index.html', title: "webpack Page App", inject: "body"})]
};