const path = require('path');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const CleanDistPlugin = require('webpack-clean-dist-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const LoadablePlugin = require('@loadable/webpack-plugin');
const NodeExternals = require('webpack-node-externals');

module.exports = (env, args) => {
  const isProduction = (args.mode === 'production');
  const filename = 'index';
  const distFolder = 'dist';

  return [
    {
      name: 'browser',
      devtool: (isProduction ? false : 'source-map'),
      plugins: [
        new CleanDistPlugin(),
        new BundleAnalyzerPlugin({ analyzerMode: 'static', openAnalyzer: false, reportFilename: 'dependencies.html' }),
        new CopyPlugin({ patterns: [{ from: './src/public/', to: './' }] }),
        new LoadablePlugin()
      ],
      target: 'web',
      entry: ['@babel/polyfill', './src/index.js'],
      output: {
        chunkFilename: 'chunk-[contenthash].js',
        filename: `${filename}.js`,
        path: path.resolve(__dirname, distFolder, 'public'),
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
    },
    {
      name: 'server',
      devtool: (isProduction ? false : 'inline-source-map'),
      externals: [NodeExternals()],
      plugins: [
        new CleanDistPlugin(),
        new CopyPlugin({ patterns: [{ from: './package.json', to: './' }] }),
        new LoadablePlugin()
      ],
      target: 'node',
      entry: ['@babel/polyfill', './src/server.js'],
      output: {
        chunkFilename: 'chunk-[contenthash].js',
        filename: `${filename}.js`,
        libraryTarget: 'commonjs2',
        path: path.resolve(__dirname, distFolder),
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
    }
  ];
};
