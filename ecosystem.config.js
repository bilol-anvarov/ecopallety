module.exports = {
    apps: [{
      name: "ecopallety",
      script: "node_modules/next/dist/bin/next", 
      args: "start -p 3030",
      env: {
        NODE_ENV: "production"
      },
      // Дополнительные опции, например, число инстансов, перезапуски и т.д.
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "300M"
    }]
  };
  