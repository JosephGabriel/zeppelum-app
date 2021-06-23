import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from '../screens/Home'
import Cart from '../screens/Cart'
import Profile from '../screens/Profile'
import Favorites from '../screens/Favorites'

const Tab = createBottomTabNavigator()

const mainTab = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Cart" component={Cart} />
            <Tab.Screen name="Profile" component={Profile} />
            <Tab.Screen name="Favorites" component={Favorites} />
        </Tab.Navigator>
    )
}

export default mainTab
