import { createApp, Directive } from 'vue';
import { store, key } from './store';
import * as directives from '@/directives';
import { Toast } from 'vant';
import App from './App.vue';

// import 'lib-flexible';
// tslint:disable-next-line: no-var-requires
const router = require('@/router/index.val').default;

const app = createApp(App);
app.config.globalProperties.$toast = Toast;

// 注册自定义指令
// tslint:disable-next-line: no-shadowed-variable
Object.keys(directives).forEach(key => {
  app.directive(key, (directives as { [key: string]: Directive })[key]);
});

app.use(router).use(store, key).mount('#App');

if (module.hot) {
  module.hot.accept();
}
