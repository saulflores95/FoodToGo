import { StatusBar, SafeAreaView } from "react-native";
import { Searchbar } from "react-native-paper";
import RestaurantInfoCard from "../components/restaurant-info-card.component";
import styled from "styled-components/native";
import React from "react";
const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantListContainer = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantScreen: React.FC = () => {
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <RestaurantListContainer>
        <RestaurantInfoCard
          name={"Some Golf club"}
          icon={
            "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png"
          }
          photos={["https://cdn.forbes.com.mx/2016/12/palo-y-bola-de-golf.jpg"]}
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
