import React from 'react'
import { createAppContainer } from 'react-navigation';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import { Transition } from 'react-native-reanimated';

import Auth from '../screens/Auth'
import Login from '../screens/Login'
import DashBoard from '../screens/DashBoard'

const MySwitch = createAnimatedSwitchNavigator(
    {
        Auth: Auth,
        Login: Login,
        DashBoard: DashBoard
    },
    {
        transition: (
            <Transition.Together>
                <Transition.Out
                    type="slide-bottom"
                    durationMs={400}
                    interpolation="easeIn"
                />
                <Transition.In type="fade" durationMs={500} />
            </Transition.Together>
        ),
    }
);

const AppContainer = createAppContainer(MySwitch);
export default AppContainer;