import styled from "styled-components/native";
import { Card, Paragraph } from "react-native-paper";

export const Container = styled.Pressable`
  width: 220px;
  margin-bottom: 20px;
  margin-right: 20px;
`;

export const RatingContainer = styled.View`
  margin-left: 10px;
  align-items: flex-start;
`;

export const Cover = styled(Card.Cover)`
  height: 150px;
`;

export const DescriptionText = styled(Paragraph)`
  margin-top: 0;
`;

export const PriceText = styled(Paragraph)`
  color: #6200ee;
  margin: 5px 0;
`;
