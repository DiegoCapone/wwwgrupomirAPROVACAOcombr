import React from 'react'
import {
    createDrawerNavigator
} from 'react-navigation'
import Menu from '../components/Menu'
import DashBoard from '../screens/DashBoard'
import Auth from '../screens/Auth'



const MenuRoutes = {
    Solicitacoes: {
        name: 'Solicitações',
        screen: DashBoard
    },
    Sair: {
        name: 'Sair',
        screen: Auth
    },
}


const MenuConfig = {
    initialRouteName: 'Solicitacoes',
    contentComponent: Menu,
    overlayColor: '0%',
    drawerType: 'back',
    contentOptions: {
        labelStyle: {
            fontSize: 14,
        },
        activeLabelStyle: {
            color: '#080',
        }
    }
}

const MenuNavigator = createDrawerNavigator(MenuRoutes, MenuConfig)
export default MenuNavigator

