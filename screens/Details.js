import React from 'react';
import { Text } from 'react-native';
import EditIcon from '../components/editIcon';

const Details = ({route, navigation}) => {
    const { description, key, title } = route.params;
  return (
    <>
    <Text style={{fontSize: 25, fontWeight: 'bold', margin: 15}}>{title}</Text>
    <Text style={{fontSize: 15, fontWeight: 'bold', margin: 15}}>{description}</Text>
    <EditIcon tit={title} des={description} k={route.params.key} nav={navigation}/>
    </>
  );
}



export default Details;