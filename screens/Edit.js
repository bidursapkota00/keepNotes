import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {editNotes} from '../actions/notes';
import {Text, TouchableOpacity, View} from 'react-native';
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
    <View style={{margin: 15}}>
      <TextInput
        style={{fontSize: 25, fontWeight: 'bold', color: 'black'}}
        name="Title"
        onChangeText={title => setTitle(title)}
        defaultValue={title}
      />
      <TextInput
        style={{fontSize: 15, fontWeight: 'bold', color: 'black'}}
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
        <Text style={{fontSize: 22, color: 'purple', fontWeight: 'bold'}}>Edit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Edit;
