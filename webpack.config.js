const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ROOT = path.resolve(__dirname, 'src');

module.exports = {

  devtool: 'source-map',

  // bundling mode
  mode: 'production',

  // entry files
  entry: './src/main.ts',

  // output bundles (location)
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },

  // file resolutions
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/')
    },
    extensions: ['.ts', '.tsx', '.js', '.json'],
    modules: [
      ROOT,
      'node_modules'
    ]
  },

  // loaders
  module: {
    rules: [{
        test: /\.tsx?/,
        use: {
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
          }
        },
        exclude: /node_modules/,
      },
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        use: [{
          loader:'file-loader',
          options:{
            name:'[name].[ext]',
            outputPath:'assets/'
          }
        }],
      },
    ]
  },
  
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
};