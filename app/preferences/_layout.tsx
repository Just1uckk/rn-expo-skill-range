import { Asset } from "expo-asset";
import { Slot } from "expo-router";
import styled from "styled-components/native";

export default function PreferencesLayout() {
  return (
    <>
      <BackgroundImage
        resizeMode="stretch"
        source={{
          uri: Asset.fromModule(require("../../assets/images/background.png"))
            .uri,
        }}
      >
        <Slot />
      </BackgroundImage>
    </>
  );
}

const BackgroundImage = styled.ImageBackground`
  position: absolute;
  top: 0;
  height:100%;
  flex: 1;
`;
