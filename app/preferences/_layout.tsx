import { Asset } from "expo-asset";
import { Slot } from "expo-router";
import styled from "styled-components/native";

export default function PreferencesLayout() {
  return (
    <Container>
      <BackgroundImage
        resizeMode="cover"
        source={{
          uri: Asset.fromModule(require("../../assets/images/background.png"))
            .uri,
        }}
      >
        <Slot />
      </BackgroundImage>
    </Container>
  );
}

const Container = styled.View`
  height: 100%;
`;

const BackgroundImage = styled.ImageBackground`
  flex: 1;
`;
