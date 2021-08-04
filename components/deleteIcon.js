import React from 'react';
import {View, TouchableOpacity} from 'react-native';
// import styles from '../styles/PlusIcon.Style'
import Icon from 'react-native-vector-icons/FontAwesome';
import {deleteNotes} from '../actions/notes';
import {useDispatch} from 'react-redux';

const DeleteIcon = ({id}) => {
  const dispatch = useDispatch();
  const deleteNote = id => {
    dispatch(deleteNotes(id));
  };
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          deleteNote({id});
        }}>
        <Icon name="trash" size={30} color="red" />
      </TouchableOpacity>
    </View>
  );
};

export default DeleteIcon;
