const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

const config = (phase) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;

  return {
    reactStrictMode: true,
    env: {
      API_URL: process.env.API_URL,
    },
  };
};

module.exports = config;
