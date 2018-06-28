const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry : './src/js/index.js',
    output : {
        filename : 'de.titus.OnScreen.js',
        path : path.resolve(__dirname, 'dist')
    },
    mode : 'production',
    devtool : 'inline-source-map',
    plugins : [ new UglifyJSPlugin({
	    sourceMap : true
    }) ]
};
