const withPlugins = require('next-compose-plugins');
const withPWA = require('next-pwa');
const withTM = require('next-transpile-modules')([
  '@mui/material',
  '@mui/system',
]); // pass the modules you would like to see transpiled

const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@mui/styled-engine': '@mui/styled-engine-sc',
    };
    return config;
  },
  images: {
    domains: ['micro-blog.awalmula.co', 'staging-cuan.awalmula.co'],
  },
};

module.exports = withPlugins(
  [
    [
      withPWA,
      {
        pwa: {
          disable: process.env.NODE_ENV === 'development',
          dest: 'public',
          buildExcludes: [/middleware-manifest\.json$/],
        },
      },
    ],
    [withTM],
  ],
  nextConfig
);
