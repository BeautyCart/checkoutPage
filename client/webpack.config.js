const path = require('path');

module.exports = {
  entry: '/Users/jenniferxiong/HRSF128/checkoutPage/client/src/index.jsx',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"]
          }
        }
      }
    ]
  },
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  }


  // entry: '/Users/jenniferxiong/HRSF128/checkoutPage/client/src/index.jsx',
  // module: {
  //   rules: [
  //     {
  //       test: /\.(js|jsx)$/,
  //       exclude: /node_modules/,
  //       use: {
  //         loader: "babel-loader",
  //         options: {
  //           presets: ["@babel/preset-react", "@babel/preset-env"]
  //         }
  //       }
  //     }
  //   ]
  // },
  // mode: 'development',          
  // output: {
  //   filename: 'bundle.js',
  //   path: __dirname + '/dist'
  // }
}