const express = require('express');
const webpack = require('webpack');
const devMiddleware = require('webpack-dev-middleware');
const hotMiddleware = require('webpack-hot-middleware');
const path = require('path');
const fs = require('fs');
const webpackConfig = require('./webpack.dev');
const proxy = require('./proxy');

const app = express();
const compiler = webpack(webpackConfig);

const useAssets = (assetsPath) => {
  const _path = path.resolve(__dirname, assetsPath);

  // 判断静态资源目录是否存在
  fs.stat(_path, (err) => {
    if (err) {
      throw Error(`静态资源目录：${_path}不存在，请先克隆仓库！`);
    }
    console.log(_path);
    // 代理静态资源仓库目录
    app.use('/assets', express.static(_path));
  })
}

useAssets('../../YMh5_assets');

app.use('/dev', proxy);

// 使用webpack-dev-middleware中间件
app.use(
  devMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath
  })
);

// 使用webpack-hot-middleware中间件，配置在console台输出日志
app.use(
  hotMiddleware(compiler, {
    log: false,
    path: '/__webpack_hmr',
    heartbeat: 10 * 1000
  })
);

// 使用静态资源目录
app.use(express.static(webpackConfig.output.path));

// 访问不存在路由全部指向html文件
app.use('*', function (req, res, next) {
  const filename = path.join(compiler.outputPath, 'index.html');

  // 匹配到静态资源文件直接走下一个中间件
  if (/^\/assets/.test(req.originalUrl)) {
    return next();
  }

  compiler.outputFileSystem.readFile(filename, function (err, result) {
    if (err) {
      return next(err);
    }
    res.set('content-type', 'text/html');
    res.send(result);
    res.end();
  });
});

let server;

const bootstrap = () => {
  if (!server) {
    const appServer = app.listen(3001, () => {
      server = appServer;
      console.info('成功启动：localhost:3001')
    });
  }
}

compiler.hooks.afterCompile.tap('server start', bootstrap);