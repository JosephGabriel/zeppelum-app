import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, ScrollView } from "react-native";
import { TextInput } from "react-native-paper";

import { registerUserStart } from "../../redux/user/userActions";
import Container from "../../components/Container";

import {
  TextContainer,
  InputContainer,
  Input,
  RegisterButton,
  RegisterTextAccent,
  RegisterText,
  ImageContainer,
  Logo,
} from "./styles";

const Register = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.user.loadingRegister);
  const user = useSelector((state) => state.user.currentUser);

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [hidden, setHidden] = useState(true);
  const [hiddenConfirm, setHiddenConfirm] = useState(true);

  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      user
        ? navigation.reset({
            routes: [{ name: "MainTab" }],
          })
        : null;
    });
  }, [user]);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
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
            label="Nome"
            value={name}
            onChangeText={(name) => setName(name)}
            left={<TextInput.Icon name="account" color="gray" />}
          />

          <Input
            mode="outlined"
            label="Sobrenome"
            value={lastName}
            onChangeText={(lastName) => setLastName(lastName)}
            left={<TextInput.Icon name="account-multiple" color="gray" />}
          />

          <Input
            mode="outlined"
            label="Email"
            value={email}
            keyboardType="email-address"
            onChangeText={(email) => setEmail(email)}
            left={<TextInput.Icon name="email" color="gray" />}
          />

          <Input
            mode="outlined"
            label="Senha"
            value={password}
            secureTextEntry={hidden}
            onChangeText={(password) => setPassword(password)}
            left={<TextInput.Icon name="lock" color="gray" />}
            right={
              password ? (
                <TextInput.Icon
                  onPress={() => setHidden(!hidden)}
                  name={hidden ? "eye" : "eye-off"}
                  color="gray"
                />
              ) : null
            }
          />

          <Input
            mode="outlined"
            label="Confirmar senha"
            value={confirmPassword}
            secureTextEntry={hiddenConfirm}
            onChangeText={(confirmPassword) =>
              setConfirmPassword(confirmPassword)
            }
            left={<TextInput.Icon name="lock" color="gray" />}
            right={
              confirmPassword ? (
                <TextInput.Icon
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
    </ScrollView>
  );
};

export default Register;
