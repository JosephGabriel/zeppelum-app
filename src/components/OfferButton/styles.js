import styled from "styled-components/native";
import { Surface, Title, Button } from "react-native-paper";

export const SurfaceContainer = styled(Button)`
  align-items: center;
  justify-content: center;
  margin: 20px 5px;
  overflow: hidden;
  elevation: 4;
  width: 100px;
  background-color: #fff;
  border: none;
  height: 100px;
`;

export const Text = styled(Title)`
  font-weight: bold;
`;

export const Percentage = styled.Text`
  font-weight: bold;
  color: #6200ee;
`;
