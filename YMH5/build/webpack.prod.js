const { merge } = require('webpack-merge');
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const config = require('./webpack.config');

module.exports = merge(config, {
  optimization: {
    minimizer: [
      // 压缩js
      new TerserPlugin({
        // 启用多进程压缩文件
        parallel: true,
        terserOptions: {
          ecma: undefined,
          parse: {},
          compress: {},
          mangle: true,
          module: false,
          output: null,
          format: null,
          toplevel: false,
          nameCache: null,
          ie8: false,
          keep_classnames: undefined,
          keep_fnames: false,
          safari10: false,
        },
      })
    ]
  },
  plugins: [
    // 压缩css
    new CssMinimizerPlugin(),
    // 打包分析
    // new BundleAnalyzerPlugin()
  ],
})