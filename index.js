/** @format */

import {AppRegistry} from 'react-native';
import App from './src/App.js';

AppRegistry.registerComponent('auth', () => App);

if (__DEV__) {
  require('react-devtools');
}
