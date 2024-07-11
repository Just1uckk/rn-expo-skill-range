import { Slot } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import styled, { ThemeProvider } from "styled-components/native";

import { theme } from "../components/theme/theme";
import FontLoader from "../components/utils/fonts/fontLoader";
import { GlobalProvider } from "../components/utils/state/globalState";

interface LayoutSafeAreaProps {
  pt?: number;
  pb?: number;
  pl?: number;
  pr?: number;
}

export default function MainLayout() {
  const insets = useSafeAreaInsets();

  return (
    <FontLoader>
      <GlobalProvider>
        <ThemeProvider theme={theme}>
          <LayoutSafeArea pb={insets.bottom} pl={insets.left} pr={insets.right}>
            <Slot />
          </LayoutSafeArea>
        </ThemeProvider>
      </GlobalProvider>
    </FontLoader>
  );
}

const LayoutSafeArea = styled.View<LayoutSafeAreaProps>`
  flex: 1;
  padding-top: ${(props) => (props.pt ? `${props.pt}px` : 0)};
  padding-right: ${(props) => (props.pr ? `${props.pr}px` : 0)};
  padding-bottom: ${(props) => (props.pb ? `${props.pb}px` : 0)};
  padding-left: ${(props) => (props.pl ? `${props.pl}px` : 0)};
`;
