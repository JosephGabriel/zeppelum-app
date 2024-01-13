import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, ScrollView, View } from "react-native";
import { TextInput } from "react-native-paper";

import { registerUserStart } from "../../redux/reducers/users";

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

import { useAppSelector } from "../../redux/store";

const Register = () => {
  const dispatch = useDispatch();
  const loading = useAppSelector((state) => state.user.loading);

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [hidden, setHidden] = useState(true);
  const [hiddenConfirm, setHiddenConfirm] = useState(true);

  const navigation = useNavigation();

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
            value={lastName}
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
            loading={loading}
            onPress={() =>
              dispatch(
                registerUserStart({
                  user: {
                    name,
                    lastName,
                    email,
                    password,
                    createdAt: Date.now(),
                  },
                })
              )
            }
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

export default Register;
