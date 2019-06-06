
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import Auth from './src/screens/Auth'
import Login from './src/screens/Login'

AppRegistry.registerComponent(appName, () => Login);
