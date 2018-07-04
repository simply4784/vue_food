// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

var cookie;
function relayRequestHeaders(proxyReq, req) {
  if (cookie) {
    proxyReq.setHeader('cookie', cookie);
  }
};

function relayResponseHeaders(proxyRes, req, res) {
  var proxyCookie = proxyRes.headers["set-cookie"];
  if (proxyCookie) {
    cookie = proxyCookie;
  }
};

module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: {
    env: require('./dev.env'),
    port: 7000,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
        '/web': {
            target: 'http://172.16.56.180:9080/datadefence/mx/v6',
            changeOrigin: true,
            pathRewrite: {
              '^/web': '',     // rewrite path 实际代理访问的路径会去掉 web 前缀
            },
            onProxyReq: relayRequestHeaders,
            onProxyRes: relayResponseHeaders // cookie 跨域
        },
        '/login':{
            target: 'http://172.16.56.180:9080/portal/rest/v6',
            changeOrigin: true,
            pathRewrite: {
              '^/login': '',     // rewrite path 实际代理访问的路径会去掉 web 前缀
            },
            onProxyReq: relayRequestHeaders,
            onProxyRes: relayResponseHeaders // cookie 跨域
        },
        '/mock':{  //对接mock接口
            target: 'http://vuedemo',
            changeOrigin: true,
            pathRewrite: {
              '^/mock': '',     // rewrite path 实际代理访问的路径会去掉 web 前缀
            }
        }
    },
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  }
}
