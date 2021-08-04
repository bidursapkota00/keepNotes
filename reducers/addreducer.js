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
      let data = action.payload;

      let note = {
        ...state,
        Notes: state.Notes.concat({
          key: Math.random(),
          title: data.title,
          description: data.description,
        }),
      };
      _storeData(note.Notes)
      return note

    case LIST_NOTES:
      let notes = action.payload;
      state.Notes = JSON.parse(notes);
      return state;

    default:
      return state;
  }
};
