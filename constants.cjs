const { version } = require('./package.json');

const constants = {
  dev: {
    'process.env.ENV': "'development'",
    'process.env.BASE_URL':
      "'https://us-central1-hufssemesterclockfirebase.cloudfunctions.net/api'",
    'process.env.VERSION': `'${version}'`
  },
  prod: {
    'process.env.ENV': "'production'",
    'process.env.BASE_URL':
      "'https://us-central1-hufssemesterclockfirebase.cloudfunctions.net/api'",
    'process.env.VERSION': `'${version}'`
  },
};

module.exports = constants;
