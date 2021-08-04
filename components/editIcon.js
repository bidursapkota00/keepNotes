import React from 'react';
import { SafeAreaView, TouchableOpacity } from 'react-native';
import styles from '../styles/PlusIcon.Style'
import Icon from 'react-native-vector-icons/FontAwesome'

const EditIcon = ({tit, des, k, nav}) => {
    return (
        <SafeAreaView style={styles.plusIcon} >
            <TouchableOpacity onPress={() => nav.navigate('Edit', {
                tit,
                des,
                k,
                nav
            })}>
                <Icon name='edit' size={60} color='green' />
            </TouchableOpacity>
        </SafeAreaView>
    );
}

export default EditIcon;
