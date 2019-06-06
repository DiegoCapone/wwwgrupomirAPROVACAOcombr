import React, { Component } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import Backgorund from '../components/LinearGradient'
import AuthInput from '../components/AuthIput'
import ButtonBranco from '../components/ButtonBranco'



export default class Auth extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cnpj: null
        };
    }

    validarCnpj = () => {
        const num = this.state.cnpj
        // cnpj.isValid(num);
        // cnpj.format(num);
        Alert.alert(num.length)

    }

    render() {
        return (
            <Backgorund content={
                <View style={styles.container}>
                    < AuthInput icon='user'
                        placeholder='CNPJ'
                        placeholderTextColor="#FFF"
                        type={'cnpj'}
                        value={this.state.cnpj}
                        onChangeText={cnpj => {
                            this.setState({ cnpj })
                        }}

                    />
                    <ButtonBranco nome='Autenticar' action={this.validarCnpj} />
                </View>
            }>
            </Backgorund>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
});
