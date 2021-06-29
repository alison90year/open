// @ts-nocheck
// tslint:disable-next-line: no-var-requires
const fs = require('fs-extra');
// tslint:disable-next-line: no-var-requires
const glob = require('glob');
// tslint:disable-next-line: no-var-requires
const path = require('path');
// tslint:disable-next-line: no-var-requires
const isArray = require('lodash/isArray');
// tslint:disable-next-line: no-var-requires
const uniqBy = require('lodash/uniqBy');
// tslint:disable-next-line: no-var-requires
const { getCommandParams } = require('../../build/common');

const { THEME, SITE, ENVI } = getCommandParams();

/**
 * 异步删除require缓存
 * @param pathList 路径名必须填写后缀
 */
const delCache = async (...pathList) => {
  await Promise.resolve();
  pathList.forEach(_path => {
    try {
      delete require.cache[require.resolve(path.join(__dirname, _path))];
    } catch (error) {
      console.error(error);
    }
  })
}

const createRouter = () => {
  // 公共路由路径
  const commonRoutersPath = '../theme/common/routers.js';
  // 私有路由路径
  const privateRoutesPath = `../theme/${THEME}/routers.js`;
  // 公共路由配置
  const commonRouters = require(commonRoutersPath).routes;
  // 私有路由配置
  const privateRoutes = require(privateRoutesPath).routes;

  // 处理路由name前缀
  const newCommonRouters = commonRouters.map((_route) => {
    return Object.assign(_route, { name: `common_${_route.name}` });
  });
  const newPrivateRoutes = privateRoutes.map((_route) => {
    return Object.assign(_route, { name: `${THEME}_${_route.name}` });
  });

  // 路由配置
  const routes = uniqBy(
    [...newPrivateRoutes, ...newCommonRouters],
    'path',
  );

  // 删除配置文件缓存
  delCache(commonRoutersPath, privateRoutesPath);

  const code = `
    // @ts-nocheck
    import { createRouter, createWebHistory } from 'vue-router';

    const _routers = [
      ${routes.map((_route) => {
        // tslint:disable-next-line: no-shadowed-variable
        const { name, path, component, options } = _route;
        const routeStr = `{
          path: '${path}',
          name: '${name}',
          component: () => import(/* webpackChunkName: "${name}" */ '${component}'),
          ${JSON.stringify(options).replace(/^\{/, '').replace(/\}$/, '').replace(/\"/g, '')}
        },`;
        return routeStr;
      }).join('\n')}
    ];

    console.log('组装路由为' ,_routers);

    const router = createRouter({
      history: createWebHistory(),
      routes: _routers
    });

    export default router;
  `;

  return {
    // 依赖文件数组绝对路径
    dependencies: [
      privateRoutesPath,
      commonRoutersPath,
    ].map((__path) => path.join(__dirname, __path)),

    // 是否每次重新编译 [是]
    cacheable: false,
    code
  }
}

module.exports = createRouter;
