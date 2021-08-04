import React from 'react';
import { Text } from 'react-native';
import EditIcon from '../components/editIcon';

const Details = ({route, navigation}) => {
    const { description, key, title } = route.params;
  return (
    <>
    <Text>{title}</Text>
    <Text>{description}</Text>
    <EditIcon tit={title} des={description} k={route.params.key} nav={navigation}/>
    </>
  );
}



export default Details;