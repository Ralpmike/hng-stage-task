// src/setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://api.timbu.cloud',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '', // This rewrites /api to the root of the target
      },
      onProxyReq: (proxyReq, req, res) => {
        console.log(`Proxying request to: ${proxyReq.getHeader('host')}${req.url}`);
      },
      onError: (err, req, res) => {
        console.error('Proxy error:', err);
      },
    })
  );
};
