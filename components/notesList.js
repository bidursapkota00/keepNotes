import React from 'react';
import {
  StyleSheet,
  FlatList,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import DeleteIcon from './deleteIcon';

const NotesList = ({navigation}) => {

  let notes = []
  notes = useSelector(state => state.add.Notes)

  const detailView = (title, description, key) => {
    navigation.navigate('Details', {
      title,
      description,
      key,
    });
  }

  return (
    <FlatList style={styles.home}
      data={notes}
      keyExtractor={(item, index) => item.key.toString()}
      renderItem={
        (data) =>
        <View style={styles.list}>
          <TouchableOpacity style={styles.text} onPress={() => {detailView(data.item.title, data.item.description, data.item.key)}}>
            <Text style={styles.title}>{data.item.title}</Text>
          </TouchableOpacity>
          <DeleteIcon id={data.item.key}/>
        </View>
      }
    />
  );
}

const styles = StyleSheet.create({
  list: {
    display: 'flex',
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'grey',
    padding: 10
  },
  home: {
    marginVertical: 20,
    marginHorizontal: 15,
  },
  text: {
    flex: 1
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  }
})


export default NotesList;