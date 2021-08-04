import React from 'react';
import {
  StyleSheet,
  FlatList,
  Text,
  View
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import DeleteIcon from './deleteIcon';

const NotesList = () => {

  let notes = []
  notes = useSelector(state => state.add.Notes)

  return (
    <FlatList style={styles.home}
      data={notes}
      keyExtractor={(item, index) => item.key.toString()}
      renderItem={
        (data) =>
        <View style={styles.list}>
          <Text style={styles.text}>{data.item.title}</Text>
          <DeleteIcon/>
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
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1
  }
})


export default NotesList;