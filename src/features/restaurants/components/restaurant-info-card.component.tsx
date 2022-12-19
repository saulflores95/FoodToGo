import { Text, StyleSheet } from "react-native";
import { FC } from "react";
import { Card } from "react-native-paper";
import styled from "styled-components/native";

interface Props {
  name: "Some Restaurant";
  icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png";
  photos: string[];
  address: "100 Some Street";
  isOpenNow: true;
  rating: 4;
  isClosedTemporarily: false;
}

const RestaurantCard = styled(Card)`
  background-color: white;
`;

const RestaurantInfoCardCover = styled(Card.Cover)`
  padding: 20px;
  background-color: white;
`;

const Title = styled.Text`
  padding: 16px;
  color: red;
`;

const RestaurantInfoCard: FC<Props> = ({ name, photos }) => {
  return (
    <RestaurantCard elevation={5}>
      <RestaurantInfoCardCover key={name} source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </RestaurantCard>
  );
};

export default RestaurantInfoCard;
