import React from 'react';
import PlusIcon from '../components/PlusIcon.component'
import NotesList from '../components/notesList';

const Home = ({ navigation }) => {
  return (
    <>
    <NotesList navigation={navigation}/>
    <PlusIcon navigation={navigation} />
    </>
  );
}



export default Home;