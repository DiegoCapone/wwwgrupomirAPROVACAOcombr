import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Backgorund from '../components/LinearGradient'
import AuthInput from '../components/AuthIput'
import ButtonBranco from '../components/ButtonBranco'
import { connect } from 'react-redux'
import { getUser } from '../store/action/getUser'


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: null,
            senha: null
        };
    }


    Login = () => {
        console.log('teste')
        this.props.onUser({ user: this.state.login })
        this.props.navigation.navigate('DashBoard')
    }

    render() {
        return (
            <Backgorund content={
                <View style={styles.container}>
                    < AuthInput icon='user'
                        type={'custom'}
                        placeholder='usuario'
                        placeholderTextColor="#FFF"
                        value={this.state.login}
                        options={{
                            mask: '******************************'
                        }}
                        onChangeText={login => {
                            this.setState({ login })
                        }}

                    />
                    < AuthInput icon='user'
                        icon='lock' secureTextEntry={true}
                        type={'custom'}
                        placeholder='senha'
                        placeholderTextColor="#FFF"
                        value={this.state.senha}
                        options={{
                            mask: '******************************'
                        }}
                        onChangeText={senha => {
                            this.setState({ senha })
                        }}

                    />

                    <ButtonBranco nome='Entrar' action={this.Login} />
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

const mapDispatchToProps = dispatch => {
    return {
        onUser: user => dispatch(getUser(user))
    }
}

export default connect(null, mapDispatchToProps)(Login)