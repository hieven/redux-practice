module.exports = {
  entry: [
    './src/client.js'
  ],

  output: {
    path: './build',
    publicPath: '/assets',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.js?$/, exclude: /node_modules/, loader: 'babel', query: { stage: 0 }
      }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
