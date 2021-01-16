import { defineConfig } from 'umi';
//在这个配置文件可以定义注释
export default defineConfig({
  //配置插件
  plugins: [
    [
      'umi-plugin-react', {}
    ]
  ],
  singular: true,//开启单数目录模式
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
});
