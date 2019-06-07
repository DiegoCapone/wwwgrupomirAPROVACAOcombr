import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { IsFlag, NoFlag } from './Flag'
import { TouchableOpacity } from 'react-native-gesture-handler';

const Solicitacao = props => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={props.flagged}>
                {props.flag}
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 100,
        borderBottomWidth: 1,
        borderColor: '#696969',
    }
})
export default Solicitacao;
