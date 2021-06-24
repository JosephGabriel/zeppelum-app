import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity, ScrollView } from 'react-native'
import { TextInput } from 'react-native-paper'

import Container from '../../components/Container'

import { TextContainer, InputContainer, Input, LoginButton, RegisterTextAccent, RegisterText, ImageContainer, Logo } from './styles'

const Login = () => {

    const navigation = useNavigation()

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <Container center>
                <ImageContainer>
                    <Logo resizeMode="contain" source={require('../../../assets/logo.jpg')} />
                </ImageContainer>
                <InputContainer>
                    <Input
                        mode="outlined"
                        label="Nome"
                        left={<TextInput.Icon name="account" color="gray" />}
                    />
                    <Input
                        mode="outlined"
                        label="Sobrenome"
                        left={<TextInput.Icon name="account" color="gray" />}
                    />
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
                    <Input
                        mode="outlined"
                        label="Confirmar senha"
                        secureTextEntry={true}
                        left={<TextInput.Icon name="lock" color="gray" />}
                    />

                    <LoginButton mode="contained">Registrar</LoginButton>

                    <TextContainer>
                        <RegisterText>Já tem uma conta? </RegisterText>
                        <TouchableOpacity onPress={() => navigation.navigate("Login")} >
                            <RegisterTextAccent>Clique Aqui</RegisterTextAccent>
                        </TouchableOpacity>
                    </TextContainer>

                </InputContainer>
            </Container>
        </ScrollView>
    )
}

export default Login
