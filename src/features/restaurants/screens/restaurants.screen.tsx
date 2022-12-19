import { StatusBar, StyleSheet, SafeAreaView, View } from "react-native";
import { Searchbar } from "react-native-paper";
import RestaurantInfoCard from "../components/restaurant-info-card.component";
import styled from "styled-components/native";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}px;
`;

const SearchContainer = styled.View`
  padding: 16px;
`;

const RestaurantListContainer = styled.View`
  flex: 1;
  padding: 16px;
  background-color: blue;
`;

const RestaurantScreen: React.FC<{}> = () => {
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <RestaurantListContainer>
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
      </RestaurantListContainer>
    </SafeArea>
  );
};

export default RestaurantScreen;
