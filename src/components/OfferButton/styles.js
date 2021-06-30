import styled from "styled-components/native";
import { Surface, Title } from "react-native-paper";

export const SurfaceContainer = styled(Surface)`
  align-items: center;
  justify-content: center;
  elevation: 4;
  margin-bottom: 20px;
  margin-right: 20px;
  border-radius: 5px;
  overflow: hidden;
  width: 100px;
  height: 100px;
`;

export const Text = styled(Title)`
  font-weight: bold;
`;

export const Percentage = styled.Text`
  font-weight: bold;
  color: #6200ee;
`;
