const { createProxyMiddleware } = require('http-middleware');

module.exports = function(App) {
    App.use(
        '/api',
        createProxyMiddleware({
            target: "https://sturdy-journey-7xr54v6pp4q2wpvr-5173.app.github.dev",
            
        })
    )
}