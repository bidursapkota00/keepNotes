import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addNotes, listNotes} from '../actions/notes';
import {Text, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

const Add = ({navigation}) => {
 
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();
  const submitNotes = notes => {
    dispatch(addNotes(notes));
    navigation.navigate('Home');
  };
  return (
    <>
      <TextInput
        name="Title"
        onChangeText={title => setTitle(title)}
        placeholder={'Title'}
      />
      <TextInput
        name="Description"
        multiline={true}
        numberOfLines={7}
        placeholder={'Description'}
        onChangeText={description => setDescription(description)}
      />
      <TouchableOpacity
        style={{marginBottom: 16}}
        onPress={() => {
          submitNotes({title, description});
        }}>
        <Text style={{fontSize: 22, color: '#5fc9f8'}}>Submit</Text>
      </TouchableOpacity>
    </>
  );
};

export default Add;
