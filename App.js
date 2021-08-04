import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home'
import Add from './screens/Add'
import { addNotes } from './actions/notes';
import { bindActionCreators } from 'redux';
import LoadingScreen from './screens/Loading';


const Stack = createStackNavigator()
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Loading" component={LoadingScreen}/>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Add" component={Add} />        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const mapStateToProps = state => ({
//   title: state.title,
//   description: state.description
// });

// const ActionCreators = Object.assign(
//   {},
//   addNotes,
// );
// const mapDispatchToProps = dispatch => ({
//   actions: bindActionCreators(ActionCreators, dispatch),
// });

export default App