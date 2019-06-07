import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { SideBar, SideBarAction } from '../components/SideBar'
import Solicitacao from '../components/Solicitacao';
import { IsFlag, NoFlag } from '../components/Flag';

export default class DashBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            edit: false,
            flagged: false
        };
    }

    modoEdit = () => {
        this.setState({ edit: true })
    }

    modoEditOff = () => {
        this.setState({ edit: false })
        this.setState({ flagged: false })
    }

    logout = () => {
        this.props.navigation.navigate('Auth')
    }

    flagged = () => {
        this.setState({ flagged: !this.state.flagged })
        this.modoEdit()
    }


    render() {
        const flag = this.state.flagged ? <NoFlag /> : <IsFlag />
        return (

            <View>
                {!this.state.edit ? <SideBar logout={this.logout} /> : <SideBarAction modeOff={this.modoEditOff} />}
                <Solicitacao flagged={this.flagged} flag={flag} />
            </View>
        );
    }
}
