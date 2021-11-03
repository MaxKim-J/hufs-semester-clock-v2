const constants = {
  dev: {
    'process.env.ENV': "'development'",
    'process.env.BASE_URL':
      "'https://us-central1-hufssemesterclockfirebase.cloudfunctions.net'",
    'process.env.SENTRY_DSN' : "'https://6358bd1d305f4f94a05b535e3844d957@o1059118.ingest.sentry.io/6047312'"
  },
  prod: {
    'process.env.ENV': "'production'",
    'process.env.BASE_URL':
      "'https://us-central1-hufssemesterclockfirebase.cloudfunctions.net'",
    'process.env.SENTRY_DSN' : "'https://6358bd1d305f4f94a05b535e3844d957@o1059118.ingest.sentry.io/6047312'"
  },
};

module.exports = constants;
