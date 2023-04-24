const { defineConfig } = require('@vue/cli-service');
// const PrerenderSPAPlugin = require('prerender-spa-plugin-next');
// const Renderer = require('@prerenderer/renderer-puppeteer')
// const path = require('path')

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  productionSourceMap: false,
  // configureWebpack: {
  //   plugins: [
  //     new PrerenderSPAPlugin({
  //       routes: ['/h6', '/h5'],
  //       renderer: new Renderer({
  //         inject: {
  //           foo: 'bar'
  //         },
  //         headless: false,
  //         renderAfterDocumentEvent: 'render-event'
  //       })
  //     })
  //   ]
  // }
});
