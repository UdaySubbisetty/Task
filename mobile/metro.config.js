const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */


const path = require("path");

const extraNodeModules = {
  common: path.resolve(__dirname, "../common"),
  '@babel/runtime': path.resolve(__dirname, 'node_modules/@babel/runtime'),
  react: path.resolve(__dirname, 'node_modules/react'),
  'react-dom': path.resolve(__dirname, 'node_modules/react-dom'),
  'node_modules': path.resolve(__dirname, 'node_modules'),
};

const config = {
  resolver: {
    extraNodeModules
  },
  watchFolders: [path.resolve(__dirname, "../common"), path.resolve(__dirname, 'node_modules')],
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
