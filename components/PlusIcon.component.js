import React from 'react';
import { SafeAreaView, TouchableOpacity } from 'react-native';
import styles from '../styles/PlusIcon.Style'
import Icon from 'react-native-vector-icons/FontAwesome'

const PlusIcon = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.plusIcon} >
            <TouchableOpacity onPress={() => navigation.navigate('Add')}>
                <Icon name='plus' size={60} color='blue' />
            </TouchableOpacity>
        </SafeAreaView>
    );
}

export default PlusIcon;
