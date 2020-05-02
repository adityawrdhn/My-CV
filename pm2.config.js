module.exports = {
    apps: [
      {
        name: 'React SSR',
        script: 'build/server/server.js',
        instances: 1,
        autorestart: true,
        watch: ['build'],
        ignore_watch: ['node_modules', 'assets'],
        watch_options: {
          followSymlinks: false,
        },
        max_memory_restart: '1G',
        env: {
          NODE_ENV: 'development',
        },
        env_production: {
          NODE_ENV: 'production',
        },
        env_staging: {
          NODE_ENV: 'staging',
        },
      },
    ],
  };