import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { TextInput } from "react-native-paper";

import {
  TextContainer,
  InputContainer,
  Input,
  RegisterButton,
  RegisterTextAccent,
  RegisterText,
  ImageContainer,
  Logo,
  ScrollContainer,
  Container,
} from "./styles";

import { api } from "../../services/api";

export const RegisterScreen = () => {
  const [name, setName] = useState("nome");
  const [lastname, setLastName] = useState("nome");
  const [email, setEmail] = useState("teste@teste.com");
  const [password, setPassword] = useState("password");
  const [confirmPassword, setConfirmPassword] = useState("password");

  const [hidden, setHidden] = useState(true);
  const [hiddenConfirm, setHiddenConfirm] = useState(true);

  const navigation = useNavigation();

  const [signupUserApi, { isLoading }] = api.useSignupUserMutation();

  const signupUser = async () => {
    try {
      const value = await signupUserApi({
        email,
        lastname,
        name,
        password,
        passwordConfirm: confirmPassword,
      });

      console.warn(value);
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <ScrollContainer
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{}}
    >
      <Container>
        <ImageContainer>
          <Logo
            resizeMode="contain"
            source={require("../../../assets/logo.jpg")}
          />
        </ImageContainer>

        <InputContainer>
          <Input
            autoCompleteType={true}
            mode="outlined"
            label="Nome"
            value={name}
            onChangeText={(name) => setName(name)}
            left={
              <TextInput.Icon
                hasTVPreferredFocus={false}
                tvParallaxProperties={false}
                name="account"
                color="gray"
              />
            }
          />

          <Input
            autoCompleteType={true}
            mode="outlined"
            label="Sobrenome"
            value={lastname}
            onChangeText={(lastName) => setLastName(lastName)}
            left={
              <TextInput.Icon
                hasTVPreferredFocus={false}
                tvParallaxProperties={false}
                name="account-multiple"
                color="gray"
              />
            }
          />

          <Input
            autoCompleteType={true}
            mode="outlined"
            label="Email"
            value={email}
            autoCapitalize="none"
            keyboardType="email-address"
            onChangeText={(email) => setEmail(email)}
            left={
              <TextInput.Icon
                hasTVPreferredFocus={false}
                tvParallaxProperties={false}
                name="email"
                color="gray"
              />
            }
          />

          <Input
            autoCompleteType={true}
            mode="outlined"
            label="Senha"
            autoCapitalize="none"
            value={password}
            secureTextEntry={hidden}
            onChangeText={(password) => setPassword(password)}
            left={
              <TextInput.Icon
                hasTVPreferredFocus={false}
                tvParallaxProperties={false}
                name="lock"
                color="gray"
              />
            }
            right={
              password ? (
                <TextInput.Icon
                  hasTVPreferredFocus={false}
                  tvParallaxProperties={false}
                  onPress={() => setHidden(!hidden)}
                  name={hidden ? "eye" : "eye-off"}
                  color="gray"
                />
              ) : null
            }
          />

          <Input
            autoCompleteType={true}
            mode="outlined"
            label="Confirmar senha"
            autoCapitalize="none"
            value={confirmPassword}
            secureTextEntry={hiddenConfirm}
            onChangeText={(confirmPassword) =>
              setConfirmPassword(confirmPassword)
            }
            left={
              <TextInput.Icon
                hasTVPreferredFocus={false}
                tvParallaxProperties={false}
                name="lock"
                color="gray"
              />
            }
            right={
              confirmPassword ? (
                <TextInput.Icon
                  hasTVPreferredFocus={false}
                  tvParallaxProperties={false}
                  onPress={() => setHiddenConfirm(!hiddenConfirm)}
                  name={hiddenConfirm ? "eye" : "eye-off"}
                  color="gray"
                />
              ) : null
            }
          />

          <RegisterButton
            mode="contained"
            loading={isLoading}
            onPress={signupUser}
          >
            Registrar
          </RegisterButton>

          <TextContainer>
            <RegisterText>Já tem uma conta? </RegisterText>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <RegisterTextAccent>Clique Aqui</RegisterTextAccent>
            </TouchableOpacity>
          </TextContainer>
        </InputContainer>
      </Container>
    </ScrollContainer>
  );
};
