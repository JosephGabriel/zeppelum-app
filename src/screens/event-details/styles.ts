import { Title, Subheading, Paragraph } from "react-native-paper";
import styled from "styled-components/native";

export const ScrollContainer = styled.ScrollView`
  flex: 1;
  background-color: #fff;
`;

export const ImageCover = styled.Image`
  width: 100%;
  height: 250px;
`;

export const DetailsContainer = styled.View`
  padding: 15px;
`;

export const TitleText = styled(Title)`
  font-weight: 600;
`;

export const OptionsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 5px;
`;

export const ChipContainer = styled.View`
  flex-direction: row;
`;

export const SubheadingText = styled(Subheading)`
  margin-top: 10px;
  font-weight: bold;
  color: #6200ee;
`;

export const DescriptionText = styled(Paragraph)`
  margin: 20px 0;
`;
