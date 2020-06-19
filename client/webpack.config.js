module.exports = {
  entry: __dirname + '/src/App.jsx',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["react", "env"]
        },
      }
    ]
  },
  mode: 'development',          
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist'
  }
}