import React from 'react'
import { StyleSheet, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { TextInputMask } from 'react-native-masked-text'

const AuthInput = props => {
    return (
        <View style={[styles.container, props.style]}>
            <Icon name={props.icon} size={20} style={styles.icon} />
            <TextInputMask  {...props} style={styles.input} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: '#FFF',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    icon: {
        color: '#FFF',
        marginLeft: 20,

    },
    input: {
        marginLeft: 20,
        width: '70%',
        fontSize: 14,
        fontFamily: 'Gill Sans',
        color: '#FFF',
    }
})

export default AuthInput