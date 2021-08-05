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
      _storeData(note.Notes);
      return note;

    case LIST_NOTES:
      let notes = action.payload;
      if(notes) {
        state.Notes = JSON.parse(notes);
      }
      return state;

    case DELETE_NOTES:
      let items = {
        ...state,
        Notes: state.Notes.filter(item => item.key !== action.payload.id),
      };
      _storeData(items.Notes);
      return items;

    case EDIT_NOTES:
      let info = action.payload;
      let edited = {
        ...state,
        Notes: state.Notes.filter(item => item.key !== info.k),
      }
      
      edited = {
        ...state,
        Notes: edited.Notes.concat({
          key: info.k,
          title: info.title,
          description: info.description,
        }),
      };
      
      _storeData(edited.Notes);
      return edited;

    default:
      return state;
  }
};
