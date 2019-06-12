import React, { Component } from 'react'
import {
    ScrollView,
    View,
    Text,
    StyleSheet,
    ImageBackground
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { connect } from 'react-redux'
import { DrawerItems } from 'react-navigation'
import backgroundSideBarMenu from '../assets/img/sideBarMenu.png'

const background = props => {
    return (
        <ImageBackground source={backgroundSideBarMenu} style={{ width: '100%', height: '100%' }} >
            {props.content}
        </ImageBackground>
    )
}

const Menu = props => {
    return (
        <ScrollView>
            <View style={styles.header}>
                <Text style={styles.title}>{props.user}</Text>
            </View>
            <DrawerItems {...props} />
        </ScrollView >

    );
}


const styles = StyleSheet.create({
    header: {
        borderBottomWidth: 1,
        borderColor: '#DDD',
    },
    title: {
        backgroundColor: '#FFF',
        color: '#FFF',
        fontSize: 18,
        paddingVertical: 80,
        padding: 10,
    },
})

const mapStateToProps = ({ user }) => {
    return {
        user: user.user
    }
}


export default connect(mapStateToProps, null)(Menu)