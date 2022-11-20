/** @type {import('next').NextConfig} */

const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

module.exports = {
  webpack(config, options) {
    const { isServer } = options;
    config.plugins.push(
      new NextFederationPlugin({
        name: 'remote',
        remotes: {
          
        },
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './nav': './components/header/index.js',
        },
        shared: {
         
        },
      })
    );

    return config;
  },
};


