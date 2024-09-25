const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  entry: './app/javascript/packs/application.js',
  output: {
    filename: '[name]-[hash].js',
    path: path.resolve(__dirname, 'public/packs'),
    publicPath: '/packs/'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader'
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm-bundler.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  devServer: {
    contentBase: path.join(__dirname, 'public/packs'),
    compress: true,
    port: 3035,
    watchFiles: ['app/javascript/**/*', 'app/views/**/*'],
    hot: true,
    liveReload: true
  }
};
