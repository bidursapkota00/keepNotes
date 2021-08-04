import React from 'react';
import { View, TouchableOpacity } from 'react-native';
// import styles from '../styles/PlusIcon.Style'
import Icon from 'react-native-vector-icons/FontAwesome'

const DeleteIcon = () => {
    return (
        <View >
            <TouchableOpacity onPress={() => pass}>
                <Icon name='trash' size={30} color='red' />
            </TouchableOpacity>
        </View>
    );
}

export default DeleteIcon;