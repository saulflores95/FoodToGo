import { Text, StyleSheet } from "react-native";
import { FC } from "react";
import { Card } from "react-native-paper";

interface Props {
  name: "Some Restaurant";
  icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png";
  photos: string[];
  address: "100 Some Street";
  isOpenNow: true;
  rating: 4;
  isClosedTemporarily: false;
}

const RestaurantInfoCard: FC<Props> = ({ name, photos }) => {
  return (
    <Card elevation={5} style={styles.card}>
      <Card.Cover key={name} style={styles.cover} source={{ uri: photos[0] }} />
      <Text style={styles.title}>{name}</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
  },
  cover: {
    padding: 20,
    backgroundColor: "white",
  },
  title: {
    padding: 16,
  },
});

export default RestaurantInfoCard;
