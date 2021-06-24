import React, { useEffect } from 'react'
import { ActivityIndicator } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'

import { ImageContainer, Logo } from './styles'

import Container from '../../components/Container'

const Preload = () => {

    const navigation = useNavigation()

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("Login")
        }, 2000)
    }, [])

    return (
        <Container center>
            <ImageContainer>
                <Logo resizeMode="contain" source={require('../../../assets/logo.jpg')} />
                <ActivityIndicator size="large" />
            </ImageContainer>
        </Container>
    )
}

export default Preload
