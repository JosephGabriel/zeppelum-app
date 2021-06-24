import React from 'react'
import { StatusBar } from 'expo-status-bar'

import { ContainerHolder } from './styles'

const Container = ({ children, statusBar, ...props }) => {
    return (
        <ContainerHolder {...props}>
            {children}
            <StatusBar style={statusBar ? statusBar : "dark"} />
        </ContainerHolder>
    )
}

export default Container
