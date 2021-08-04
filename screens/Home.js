import React from 'react';
import PlusIcon from '../components/PlusIcon.component'
import NotesList from '../components/notesList';

const Home = ({ navigation }) => {
  return (
    <>
    <NotesList />
    <PlusIcon navigation={navigation} />
    </>
  );
}



export default Home;