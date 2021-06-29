const routes = [
  {
    path: '/user',
    name: 'user',
    component: '@/views/user/user.vue',
    options: {
      meta: {
        index: 1
      }
    }
  }
];

module.exports = { routes };