const constants = {
  dev: {
    'process.env.ENV': "'development'",
    'process.env.BASE_URL':
      "'https://us-central1-hufssemesterclockfirebase.cloudfunctions.net'",
  },
  prod: {
    'process.env.ENV': "'production'",
    'process.env.BASE_URL':
      "'https://us-central1-hufssemesterclockfirebase.cloudfunctions.net'",
  },
};

module.exports = constants;
