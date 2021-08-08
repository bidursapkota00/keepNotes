import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addNotes, listNotes} from '../actions/notes';
import {Text, TouchableOpacity, View} from 'react-native';
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
    <View style={{margin: 15}}>
      <TextInput
        style={{fontSize: 25, fontWeight: 'bold', color: 'black'}}
        name="Title"
        onChangeText={title => setTitle(title)}
        placeholder={'Title'}
        placeholderTextColor='green'
      />
      <TextInput
        style={{fontSize: 15, fontWeight: 'bold', color: 'black'}}
        name="Description"
        multiline={true}
        numberOfLines={7}
        placeholder={'Description'}
        placeholderTextColor='green'
        onChangeText={description => setDescription(description)}
      />
      <TouchableOpacity
        style={{marginBottom: 16}}
        onPress={() => {
          submitNotes({title, description});
        }}>
        <Text style={{fontSize: 22, color: 'purple', fontWeight: 'bold'}}>
          Submit
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Add;
