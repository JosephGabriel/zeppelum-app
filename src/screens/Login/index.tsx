import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { TextInput } from "react-native-paper";

import { useAppSelector } from "../../redux/store";

import Container from "../../components/Container";

import { loginUserStart } from "../../redux/reducers/users";

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

const Login = () => {
  const dispatch = useDispatch();

  const loading = useAppSelector(({ user }) => user.loading);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hidden, setHidden] = useState(true);

  const navigation = useNavigation();

  return (
    <Container center>
      <ImageContainer>
        <Logo
          resizeMode="contain"
          source={require("../../../assets/logo.jpg")}
        />
      </ImageContainer>

      <InputContainer>
        <Input
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

        <LoginButton
          mode="contained"
          loading={loading}
          onPress={() => dispatch(loginUserStart({ email, password }))}
        >
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

export default Login;
