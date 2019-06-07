import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

const size = 35
const NoFlag = () => {
    return (
        <Icon name='check-circle' size={size} style={{ color: '#696969' }} />
    )
}

const IsFlag = () => {
    return (
        <View style={styles.flag}>

        </View>
    )
}

const styles = StyleSheet.create({
    flag: {
        borderWidth: 1,
        width: 28,
        height: 28,
        borderRadius: 50,
        borderColor: '#696969',
    }
})

export { NoFlag, IsFlag }
