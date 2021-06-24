import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { useSelector } from 'react-redux'

import MainStack from '../navigation/mainStack'
import MainTab from '../navigation/mainTab'

const Navigator = () => {
    const user = useSelector(({ user }) => user.currentUser)

    return (
        <NavigationContainer>
            {
                user ? <MainStack /> : <MainTab />
            }
        </NavigationContainer>
    )
}

export default Navigator
