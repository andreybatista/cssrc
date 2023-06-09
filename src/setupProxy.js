const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://api.steampowered.com',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/ISteamUserStats/GetUserStatsForGame/v2/'
      },
    })
  );
};
