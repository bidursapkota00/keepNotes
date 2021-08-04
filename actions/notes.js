import {ADD_NOTES, LIST_NOTES} from '../constants';

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
export function editNotes(id) {
  return {
    type: ADD_NOTES,
    payload: {id},
  };
}
export function deleteNotes(notes) {
  return {
    type: ADD_NOTES,
    payload: {notes},
  };
}

