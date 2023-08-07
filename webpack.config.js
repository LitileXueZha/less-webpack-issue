var webpack = require('webpack');
var path = require('path');

var compiler = webpack({
    mode: 'development',
    entry: './src/index.js',
    module: {
        rules: [{
            test: /\.(le|c)ss$/,
            use: ['css-loader', 'less-loader']
        }]
    },
    resolve: {
        alias: {
            '3rd': path.join(__dirname, '3rd')
        }
    }
});

compiler.run((err, stats) => {
    console.log(stats.toString({colors:true}))
    compiler.close(console.error);
})
