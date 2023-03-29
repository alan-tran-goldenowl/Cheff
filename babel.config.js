module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
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
          styles: './src/styles',
        },
      },
    ],
  ],
};
