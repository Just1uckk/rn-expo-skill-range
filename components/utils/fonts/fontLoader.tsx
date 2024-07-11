import { useFonts } from "expo-font";
import React from "react";
import { View, Text } from "react-native";

interface FontLoaderProps {
  children: any;
}

const FontLoader = ({ children }: FontLoaderProps) => {
  const [fontsLoaded] = useFonts({
    "Europa-Regular": require("../../../assets/fonts/Europa-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return children;
};

export default FontLoader;
