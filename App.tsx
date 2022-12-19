import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import RestaurantScreen from "./src/features/restaurants/screens/restaurants.screen";
import React from "react";

export default function App() {
  return (
    <>
      <RestaurantScreen />
      <ExpoStatusBar style="auto" />
    </>
  );
}
