
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import Auth from './src/screens/Auth'
import Login from './src/screens/Login'
import Navigator from './src/Navigation/SwitchNavigator'
import DashBoard from './src/screens/DashBoard'

AppRegistry.registerComponent(appName, () => Navigator);
