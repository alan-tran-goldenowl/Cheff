module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    env: {
      development: {
        plugins: ['@babel/plugin-transform-react-jsx-source'],
      },
    },
    plugins: [
      ['module-resolver', {
        root: ['./src'],
        alias: {
          constants: './src/constants/',
          assets: './assets/',
          utils: './src/utils/',
          components: './src/components/',
          apis: './src/apis/',
          navigation: './src/navigation/',
          screens: './src/screens',
          actions: './src/actions',
          reducers: './src/reducers/',
          store: './src/stores',
        },
      }],
    ],
  };
};
