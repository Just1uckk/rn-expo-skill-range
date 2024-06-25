import { Slot } from "expo-router";
import FontLoader from "../components/utils/fontLoader";
import styled, { ThemeProvider } from "styled-components/native";
import { theme } from "../components/theme/theme";
import { useSafeAreaInsets } from "react-native-safe-area-context";
interface LayoutSafeAreaProps {
  pt: number;
  pb: number;
  pl: number;
  pr: number;
}

export default function MainLayout() {
  const insets = useSafeAreaInsets();
  return (
    <FontLoader>
      <ThemeProvider theme={theme}>
        <LayoutSafeArea
          pt={insets.top}
          pb={insets.bottom}
          pl={insets.left}
          pr={insets.right}
        >
          <Slot />
        </LayoutSafeArea>
      </ThemeProvider>
    </FontLoader>
  );
}

const LayoutSafeArea = styled.View<LayoutSafeAreaProps>`
  padding-top: ${(props) => props.pt}px;
  padding-right: ${(props) => props.pr}px;
  padding-bottom: ${(props) => props.pb}px;
  padding-left: ${(props) => props.pl}px;
`;
