module.exports = (api) => {
  const isTest = api.env('test');
  api.cache.forever();

  return {
    presets: [
      [
        "@babel/preset-env",
        {
          targets: {"chrome": "58"},
          modules: isTest ? "commonjs": false,
          loose: true,
          corejs: 3,
          useBuiltIns: "usage"
        }
      ],
      ["@babel/preset-react", {
        runtime: "automatic",
        importSource: "@emotion/react"
      }],
      "@babel/preset-typescript"
    ],
    plugins: ["@emotion"]
  }
}



