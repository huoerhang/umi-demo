import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  antd: {},
  dva: {},
  routes: [
    {
      path: '/',
      component: '@/pages/layouts/index',
      routes: [
        { path: '/hero', component: '@/pages/hero' },
        { path: '/item', component: '@/pages/item' },
        { path: '/summoner', component: '@/pages/summoner' },
      ],
    },
    // { path: '/', component: '@/pages/index' },
  ],
  proxy: {
    '/api': {
      target: 'https://pvp.qq.com',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
});
