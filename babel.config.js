module.exports = (api) => {
  api.cache(true);

  const presets = [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        corejs: { version: 3 },
        debug: true
      }
    ]
  ];

  const plugins = [
    ['@babel/transform-runtime', { corejs: 3 }],
  ]

  return {
    presets,
    plugins,
  };
};
