import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

const ButtonEntrar = props => {
    return (
        <View>
            <TouchableOpacity onPress={props.action}>
                <View style={styles.container}>
                    <Text style={styles.title}>{props.nome}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        width: 120,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
        borderColor: '#FFF',
        borderWidth: 1,
    },
    title: {
        fontSize: 14,
        fontFamily: 'Gill Sans',
        color: '#FFF',
    }
})

export default ButtonEntrar;
