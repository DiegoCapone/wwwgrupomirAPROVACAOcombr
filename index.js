import React from 'react'
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import Navigator from './src/Navigation/SwitchNavigator'
import { Provider } from 'react-redux'
import storeConfig from './src/store/StoreConfig'


const store = storeConfig()
const Redux = () => (
    <Provider store={store}>
        <Navigator />
    </Provider>
)

AppRegistry.registerComponent(appName, () => Redux);
