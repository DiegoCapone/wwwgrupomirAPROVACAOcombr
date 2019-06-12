import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { SideBar, SideBarAction } from '../components/SideBar'
import Solicitacao from '../components/Solicitacao';
import { IsFlag, NoFlag } from '../components/Flag';
import { connect } from 'react-redux'

class DashBoard extends Component {
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
        console.log(this.props.url)
        console.log(this.props.user)
    }


    render() {
        const flag = this.state.flagged ? <NoFlag /> : <IsFlag />
        return (

            <View style={styles.container}>
                {!this.state.edit ? <SideBar logout={this.logout} /> : <SideBarAction modeOff={this.modoEditOff} />}
                <Solicitacao flagged={this.flagged} flag={flag} />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        flex: 1,
    }
})

const mapStateToProps = ({ url, user }) => {
    return {
        url: url.url,
        user: user.user
    }
}


export default connect(mapStateToProps, null)(DashBoard)
