import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AsyncStorage, View, ActivityIndicator, StyleSheet} from 'react-native';

import {listNotes} from '../actions/notes';

//1 - LOADING SCREEN
export default function LoadingScreen(props) {
  const dispatch = useDispatch();
  useEffect(() => checkLocalData(), []);

  function checkLocalData() {
    //Check if LocalStorage has been populated with the sample data
    AsyncStorage.getItem('notes').then((data, err) => {
      if (err) {
        alert(err);
      } else {
        dispatch(listNotes(data));
      }
      props.navigation.replace('Home');
    });
  }

  return (
    <View style={styles.activityIndicatorContainer}>
      <ActivityIndicator animating={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  activityIndicatorContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
