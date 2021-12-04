/*
 * @Author: shitao
 * @Date: 2021-10-19 21:54:17
 * @LastEditTime: 2021-10-19 21:54:17
 * @LastEditors: shitao
 * @Description: 
 * @FilePath: \ywhzapp\craco.config.js
 * 无锡四维时空信息科技有限公司
 */
const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#1DA57A' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};