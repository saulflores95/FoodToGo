import React from "react";
import { Card } from "react-native-paper";
import styled from "styled-components/native";

interface Props {
  name: string;
  icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png";
  photos: string[];
  address: "100 Some Street";
  isOpenNow: true;
  rating: 4;
  isClosedTemporarily: false;
}

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantInfoCardCover = styled(Card.Cover)`
  padding: 20px;
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  padding: ${(props) => props.theme.space[3]};
  color: ${(props) => props.theme.colors.ui.primary};
`;

const RestaurantInfoCard: React.FC<Props> = ({
  name = "Golf Club Name",
  photos,
}) => {
  return (
    <RestaurantCard elevation={5}>
      <RestaurantInfoCardCover key={name} source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </RestaurantCard>
  );
};

export default RestaurantInfoCard;
