const path = require('path');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const CleanDistPlugin = require('webpack-clean-dist-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = (env, args) => {
  const isProduction = (args.mode === 'production');
  const filename = 'app';

  return {
    devtool: isProduction ? false : 'source-map',
    devServer: {
      inline: true,
      port: 3000
    },
    optimization: {
      minimizer: [new TerserPlugin()],
      splitChunks: {
        chunks: 'all',
        minChunks: 2
      }
    },
    plugins: [
      new CleanDistPlugin(),
      new BundleAnalyzerPlugin({ analyzerMode: 'static', openAnalyzer: false, reportFilename: 'dependencies.html' }),
      new CopyPlugin({ patterns: [{ from: './src/public/', to: './' }] }),
      new HtmlWebpackPlugin({ template: './src/index.html' })
    ],
    target: 'web',
    entry: ['@babel/polyfill', './src/index.js'],
    output: {
      chunkFilename: `${filename}-[contenthash].js`,
      filename: `${filename}.js`,
      path: path.resolve(__dirname, './dist'),
      publicPath: '/'
    },
    module: {
      rules: [
        {
          enforce: 'pre',
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'eslint-loader',
          options: {
            failOnError: true,
            failOnWarning: true
          }
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        }
      ]
    }
  };
};
