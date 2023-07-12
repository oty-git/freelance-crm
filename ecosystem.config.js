module.exports = {
  apps : [
      {
          "name":"kot_crm_frontend",
          "script"    : 'serve',
          "instances" : "max",
          env: {
              PM2_SERVE_PATH: 'build',
              PM2_SERVE_PORT: 3001,
              PM2_SERVE_SPA: 'true',
              PM2_SERVE_HOMEPAGE: '/index.html'
          }

      },

  ]
};
