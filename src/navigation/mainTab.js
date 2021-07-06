import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import HomeStack from './homeStack'
import Cart from '../screens/Cart'
import Profile from '../screens/Profile'
import Favorites from '../screens/Favorites'

const Tab = createBottomTabNavigator()

const MainTab = () => {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Home') {
                    iconName = 'compass'
                } else if (route.name === 'Carrinho') {
                    iconName = 'basket';
                }
                else if (route.name === 'Favoritos') {
                    iconName = 'heart';
                }
                else if (route.name === 'Perfil') {
                    iconName = 'account-circle';
                }

                return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
            },
        })}
            tabBarOptions={{
                activeTintColor: '#6200EE',
                inactiveTintColor: '#686868',
            }}>
            <Tab.Screen name="Home" component={HomeStack} />
            <Tab.Screen name="Carrinho" component={Cart} />
            <Tab.Screen name="Favoritos" component={Favorites} />
            <Tab.Screen name="Perfil" component={Profile} />
        </Tab.Navigator>
    )
}

export default MainTab
