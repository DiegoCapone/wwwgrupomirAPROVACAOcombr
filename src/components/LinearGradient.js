import React from 'react';
import { StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Backgorund = props => {
    return (
        <LinearGradient
            colors={['#4c669f', '#3b5998', '#192f6a']}
            style={styles.linearGradient}
            start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }}>
            {props.content}
        </LinearGradient>
    )
}


const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
    },
});
export default Backgorund;
