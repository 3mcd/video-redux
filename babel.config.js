module.exports = function(api) {
  const env = api.env();

  return {
    presets: [
      [
        '@babel/env',
        {
          modules: env === 'test' ? 'commonjs' : false,
          useBuiltIns: env === 'test' ? false : 'entry',
        },
      ],
      '@babel/typescript',
      '@babel/react',
    ],
    plugins: [
      'react-hot-loader/babel',
      '@babel/plugin-proposal-class-properties',
    ],
  };
};
