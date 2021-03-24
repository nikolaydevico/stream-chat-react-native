/* eslint-disable */
module.exports = {
  plugins: [
    'react-native-reanimated/plugin', 
    'add-react-displayname',
    './node_modules/@heap/react-native-heap/instrumentor/src/index.js'
  ],
  presets: ['module:metro-react-native-babel-preset'],
};
