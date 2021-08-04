import {ADD_NOTES, LIST_NOTES, EDIT_NOTES, DELETE_NOTES} from '../constants';

export function listNotes(notes) {
  return {
    type: LIST_NOTES,
    payload: notes
  };
}
export function addNotes(notes) {
  return {
    type: ADD_NOTES,
    payload: notes,
  };
}
export function editNotes(notes) {
  return {
    type: EDIT_NOTES,
    payload: {notes},
  };
}
export function deleteNotes(id) {
  return {
    type: DELETE_NOTES,
    payload: id,
  };
}

