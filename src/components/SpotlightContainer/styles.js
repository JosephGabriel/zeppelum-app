import styled from "styled-components/native";
import { Surface } from "react-native-paper";

export const SurfaceContainer = styled(Surface)`
  height: 140px;
  width: 300px;
  align-items: center;
  justify-content: center;
  elevation: 4;
  margin: 20px 0;
  margin-right: 10px;
  border-radius: 5px;
  overflow: hidden;
`;
export const Image = styled.Image`
  width: 100%;
  height: 100%;
  resize-mode: cover;
`;
