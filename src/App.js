import 'react-native-gesture-handler'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Home from './components/Home'
import Profile from './components/Profile'
import Login from './components/Login'
import SignUp from './components/SignUp'
import {GestureHandlerRootView} from 'react-native-gesture-handler'

const Stack = createStackNavigator()

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='Profile' component={Profile} />
          <Stack.Screen name='Login' component={Login} />
          <Stack.Screen name='SignUp' component={SignUp} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  )
}

export default App
