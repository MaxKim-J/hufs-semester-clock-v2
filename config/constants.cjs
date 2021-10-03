const constants = {
  dev: {
    'process.env.ENV': "'development'",
    'process.env.BASE_URL': "'localHost'",
  },
  prod: {
    'process.env.ENV': "'production'",
    'process.env.BASE_URL': "'firebase'",
  },
};

module.exports = constants;
