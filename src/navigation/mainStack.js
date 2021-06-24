import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Login from '../screens/Login'
import Preload from '../screens/Preload'
import Register from '../screens/Register'

import MainTab from '../navigation/mainTab'

const Stack = createStackNavigator()

const screenOptions = {
    headerShown: false
}

const mainStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={screenOptions}>
                <Stack.Screen name="Preload" component={Preload} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Register" component={Register} />
                <Stack.Screen name="MainTab" component={MainTab} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default mainStack
