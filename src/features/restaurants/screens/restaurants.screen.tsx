import { StatusBar, StyleSheet, SafeAreaView, View } from "react-native";
import { Searchbar } from "react-native-paper";
import RestaurantInfoCard from "../components/restaurant-info-card.component";

const RestaurantScreen: React.FC<{}> = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Searchbar />
      </View>
      <View style={styles.list}>
        <RestaurantInfoCard
          name={"Some Restaurant"}
          icon={
            "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png"
          }
          photos={[
            "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
          ]}
          address={"100 Some Street"}
          isOpenNow={true}
          rating={4}
          isClosedTemporarily={false}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  search: {
    padding: 16,
    backgroundColor: "green",
  },
  list: {
    flex: 1,
    padding: 16,
    backgroundColor: "blue",
  },
});

export default RestaurantScreen;
