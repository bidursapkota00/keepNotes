import {ADD_NOTES, LIST_NOTES, EDIT_NOTES, DELETE_NOTES} from '../constants';
import {AsyncStorage} from 'react-native';

const _storeData = async notes => {
  try {
    const json = JSON.stringify(notes);
    await AsyncStorage.setItem('notes', json);
  } catch (error) {
    console.log(error);
  }
};

let initialState = {
  Notes: [],
};

export const addReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTES:
      let note = action.payload;
      let sample = [];
      AsyncStorage.getItem('notes').then((data, err) => {
        sample = data;
        state.Notes = JSON.parse(sample);
        return state;
      });
    // let notes = {
    //   ...state,
    //   Notes: state.Notes.concat({
    //     key: Math.random(),
    //     title: note.title,
    //     description: note.description,
    //   }),
    // };

    case LIST_NOTES:
      let notes = action.payload;
      state.Notes = JSON.parse(notes);
      return state;

    default:
      return state;
  }
};
