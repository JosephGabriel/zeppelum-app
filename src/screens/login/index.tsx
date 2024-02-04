import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { TextInput } from "react-native-paper";

import { ErrorSnackBar } from "../../components/error-snackbar";
import { Container } from "../../components/container";

import { api } from "../../services/api";

import { ErrorPayloadApi } from "../../services/api.types";

import {
  TextContainer,
  InputContainer,
  Input,
  LoginButton,
  RegisterTextAccent,
  RegisterText,
  ImageContainer,
  Logo,
} from "./styles";

export const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hidden, setHidden] = useState(true);

  const [error, setError] = useState<ErrorPayloadApi>();

  const navigation = useNavigation();

  const [loginUserMutation, { isLoading }] = api.useLoginUserMutation();

  const loginUser = () => {
    loginUserMutation({
      email,
      password,
    })
      .unwrap()
      .catch((error) => {
        setError(error);
      });
  };

  return (
    <Container center>
      <ErrorSnackBar error={error} />

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
          label="Email"
          autoCapitalize="none"
          value={email}
          keyboardType="email-address"
          onChangeText={(email) => setEmail(email)}
          left={
            <TextInput.Icon
              hasTVPreferredFocus={false}
              tvParallaxProperties={false}
              name={"email"}
              color="gray"
            />
          }
        />

        <Input
          autoCompleteType={false}
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

        <LoginButton mode="contained" loading={isLoading} onPress={loginUser}>
          Fazer Login
        </LoginButton>

        <TextContainer>
          <RegisterText>Ainda não tem uma conta? </RegisterText>
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <RegisterTextAccent>Clique Aqui</RegisterTextAccent>
          </TouchableOpacity>
        </TextContainer>
      </InputContainer>
    </Container>
  );
};
