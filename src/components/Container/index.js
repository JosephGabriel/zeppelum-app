import React from 'react'
import { StatusBar } from 'expo-status-bar'

import { ContainerHolder } from './styles'

const Container = ({ children, statusBar, ...props }) => {
    return (
        <ContainerHolder {...props}>
            {children}
            <StatusBar style={statusBar ? statusBar : "light"} />
        </ContainerHolder>
    )
}

export default Container
