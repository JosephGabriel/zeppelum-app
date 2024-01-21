import styled from "styled-components/native";
import { TextInput, Button, Paragraph } from "react-native-paper";

export const ScrollContainer = styled.ScrollView`
  flex: 1;
  background-color: #fff;
`;

export const Container = styled.View`
  justify-content: center;
  align-items: center;
`;

export const TextContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
`;

export const InputContainer = styled.View`
  width: 80%;
  max-width: 300px;
`;

export const Input = styled(TextInput)`
  margin-bottom: 16px;
`;

export const RegisterButton = styled(Button)`
  padding: 8px 16px;
  margin-bottom: 24px;
`;

export const RegisterText = styled(Paragraph)``;

export const RegisterTextAccent = styled(Paragraph)`
  font-weight: bold;
  color: #6200ee;
  margin-bottom: 24px;
`;

export const ImageContainer = styled.View`
  width: 60%;
  max-width: 500px;
  aspect-ratio: 1;
`;

export const Logo = styled.Image`
  width: 100%;
  height: 100%;
`;
