const VueLoaderPlugin = require('vue-loader').VueLoaderPlugin;
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Webpackbar = require('webpackbar');

const { styleLoader, _resolve, getCommandParams } = require('./common');

const isProd = process.env.NODE_ENV === 'production'; // 是否生产环境
const { THEME, SITE } = getCommandParams(); // 获取构建模板参数

const BASE_STYL_DIR = '../src';
const globalStyles = [
  `${BASE_STYL_DIR}/theme/${THEME}/theme.scss`,
  `${BASE_STYL_DIR}/theme/${THEME}/${SITE}/theme.scss`,
  `${BASE_STYL_DIR}/scss/helpers.scss`
];

const config = {
  mode: isProd ? 'production' : 'development',
  entry: _resolve('../src/main.ts'),
  output: {
    path: _resolve('../dist/statics'),
    filename: '[name].[fullhash:8].js?cv=[fullhash:8]',
    chunkFilename: '[id].js?cv=[fullhash:8]',
    publicPath: '/statics/'
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              appendTsSuffixTo: [/.vue$/]
            }
          }
        ]
      },
      {
        test: /\.val\.ts$/,
        use: [
          {
            loader: `val-loader`,
            options: {
              test: 'null'
            }
          },
          'babel-loader'
        ]
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [...styleLoader]
      },
      {
        test: /.styl$/,
        use: [...styleLoader, 'stylus-loader']
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          ...styleLoader,
          'sass-loader',
          {
            loader: 'style-resources-loader',
            options: {
              patterns: globalStyles
            }
          }
        ]
      },
      {
        test: /\.less$/,
        use: [
          ...styleLoader,
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                strictMath: true
              }
            }
          }
        ]
      },
      {
        test: /\.json$/,
        use: 'json-loader'
      },
      {
        test: /\.html$/,
        use: 'html-loader'
      }
    ]
  },

  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },

  plugins: [
    new CleanWebpackPlugin({}),

    new VueLoaderPlugin(),

    new MiniCssExtractPlugin({
      filename: '[name].css?cv=[fullhash:8]',
      chunkFilename: '[name].css?cv=[fullhash:8]'
    }),

    new HtmlWebpackPlugin({
      chunks: ['main'],
      filename: '../index.html',
      template: '../public/index.ejs',
      inject: false
    }),

    new Webpackbar()
  ],

  resolve: {
    alias: {
      '@': _resolve('../src'),
      '@temp': _resolve(`../src/theme/${THEME}`),
      '@site': _resolve(`../src/theme/${THEME}/${SITE}`)
    },
    extensions: ['.ts', '.tsx', '.js', '.vue', '.scss', '.less', '.styl']
  }
};

module.exports = config;
