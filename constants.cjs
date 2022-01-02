const { version } = require('./package.json');

const constants = {
  dev: {
    'process.env.ENV': "'development'",
    'process.env.BASE_URL':
      "'https://us-central1-hufssemesterclockfirebase.cloudfunctions.net/api'",
    'process.env.SENTRY_DSN' : "'https://6358bd1d305f4f94a05b535e3844d957@o1059118.ingest.sentry.io/6047312'",
    'process.env.VERSION': `'${version}'`
  },
  prod: {
    'process.env.ENV': "'production'",
    'process.env.BASE_URL':
      "'https://us-central1-hufssemesterclockfirebase.cloudfunctions.net/api'",
    'process.env.SENTRY_DSN' : "'https://6358bd1d305f4f94a05b535e3844d957@o1059118.ingest.sentry.io/6047312'",
    'process.env.VERSION': `'${version}'`
  },
};

module.exports = constants;
