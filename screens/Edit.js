import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {editNotes} from '../actions/notes';
import {Text, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

const Edit = ({route}) => {
    const { des, k, nav, tit } = route.params;

  const [title, setTitle] = useState(tit);
  const [description, setDescription] = useState(des);
  const dispatch = useDispatch();
  const submitNotes = notes => {
    dispatch(editNotes(notes));
    nav.navigate('Home');
  };
  return (
    <>
      <TextInput
        name="Title"
        onChangeText={title => setTitle(title)}
        defaultValue={title}
      />
      <TextInput
        name="Description"
        multiline={true}
        numberOfLines={7}
        defaultValue={description}
        onChangeText={description => setDescription(description)}
      />
      <TouchableOpacity
        style={{marginBottom: 16}}
        onPress={() => {
          submitNotes({title, description, k});
        }}>
        <Text style={{fontSize: 22, color: '#5fc9f8'}}>Submit</Text>
      </TouchableOpacity>
    </>
  );
};

export default Edit;
