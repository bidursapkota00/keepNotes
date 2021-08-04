import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './screens/Home'
import Add from './screens/Add'
import LoadingScreen from './screens/Loading'
import Details from './screens/Details'
import Edit from './screens/Edit'


const Stack = createStackNavigator()
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Loading" component={LoadingScreen}/>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Details" component={Details}/>
        <Stack.Screen name="Add" component={Add} />        
        <Stack.Screen name="Edit" component={Edit} />      
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