import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import LinearGradient from './LinearGradient'
import IconBtn from './IconBtn'

const Iconsize = 20
const IconsizeAction = 30

const SideBar = props => {
    return (
        <View style={styles.container}>
            <LinearGradient content={
                <View style={styles.containerSideBar}>
                    <IconBtn name='arrow-left' size={Iconsize} styleIcon={styles.icon} action={props.logout} />
                    <Text style={styles.title}>Solicitações</Text>
                </View>
            }>
            </LinearGradient>
        </View>

    )
}

const SideBarAction = props => {
    return (
        <View style={[styles.container, { backgroundColor: '#A9A9A9' }]}>
            <View style={styles.containerSideBar}>
                <IconBtn name='arrow-left' size={Iconsize} styleIcon={styles.icon} action={props.modeOff} />
                <Text style={styles.title}>Solicitações</Text>
                <View style={{ flexDirection: 'row', marginLeft: 100 }}>
                    <IconBtn name='check-circle' size={IconsizeAction} styleIcon={styles.icon} action={props.aprovar} />
                    <IconBtn name='times-circle' size={IconsizeAction} styleIcon={styles.icon} action={props.rejeitar} />
                </View>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,
    },
    icon: {
        color: '#FFF',
        marginRight: 30,
    },
    containerSideBar: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginTop: 10,
        marginLeft: 15,

    },
    title: {
        fontSize: 14,
        color: '#FFF'
    }

})


export { SideBar, SideBarAction } 
