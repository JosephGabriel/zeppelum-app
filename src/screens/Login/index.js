import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native-paper'

import Container from '../../components/Container'

import { TextContainer, InputContainer, Input, LoginButton, RegisterTextAccent, RegisterText, ImageContainer, Logo } from './styles'

const Login = () => {

    const navigation = useNavigation()

    return (
        <Container center>
            <ImageContainer>
                <Logo resizeMode="contain" source={require('../../../assets/logo.jpg')} />
            </ImageContainer>
            <InputContainer>
                <Input
                    mode="outlined"
                    label="Email"
                    left={<TextInput.Icon name="email" color="gray" />}
                />
                <Input
                    mode="outlined"
                    label="Senha"
                    secureTextEntry={true}
                    left={<TextInput.Icon name="lock" color="gray" />}
                />

                <LoginButton mode="contained">Fazer Login</LoginButton>

                <TextContainer>
                    <RegisterText>Ainda não tem uma conta? </RegisterText>
                    <TouchableOpacity onPress={() => navigation.navigate("Register")} >
                        <RegisterTextAccent>Clique Aqui</RegisterTextAccent>
                    </TouchableOpacity>
                </TextContainer>

            </InputContainer>
        </Container>
    )
}

export default Login
