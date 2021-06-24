import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Login from '../screens/Login'
import Preload from '../screens/Preload'
import Register from '../screens/Register'


const Stack = createStackNavigator()

const screenOptions = {
    headerShown: false
}

const mainStack = () => {
    return (
        <>
            <Stack.Navigator screenOptions={screenOptions}>
                <Stack.Screen name="Preload" component={Preload} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Register" component={Register} />
            </Stack.Navigator>
        </>
    )
}

export default mainStack
