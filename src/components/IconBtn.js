import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'


const IconBtn = props => {
    return (
        <TouchableOpacity onPress={props.action}>
            <Icon name={props.name} size={props.size} style={props.styleIcon} />
        </TouchableOpacity>
    )
}


export default IconBtn;
