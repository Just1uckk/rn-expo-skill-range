import { FunctionComponent } from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import PaddingContainer from "../../components/UI/containers/container";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import PreferencesHeader from "../../components/UI/header/preferencesHeader";
import { router } from "expo-router";
import InterractiveInput from "../../components/UI/input/interractiveInput";

interface PreferencesProps {}

const Preferences: FunctionComponent<PreferencesProps> = () => {
  const insets = useSafeAreaInsets();
  return (
    <Container pt={insets.top}>
      <PreferencesHeader
        toggleBack={router.back}
        toggleDrawer={() => {
          "work";
        }}
      />
      <PaddingContainer pt={75}>
        <PreInputText>
          What should we call you?
        </PreInputText>
      </PaddingContainer>
      <InterractiveInput />
    </Container>
  );
};

const PreInputText = styled.Text`
  font-family: ${(props) => props.theme.fonts.main};
  font-size: 20px;
`;

const Container = styled.View<{pt?: number}>`
  padding-top: ${props => props.pt ? `${props.pt}px` : 0};
  padding-right: 5%;
  padding-left: 5%;
  height: 100%;
`

export default Preferences;
