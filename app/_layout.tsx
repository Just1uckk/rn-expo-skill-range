import { Slot, router, useNavigation } from "expo-router";
import FontLoader from "../components/utils/fontLoader";
import styled, { ThemeProvider } from "styled-components/native";
import { theme } from "../components/theme/theme";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useMemo } from "react";
import { GlobalProvider } from "../components/utils/state/globalState";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
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
          <LayoutSafeArea
            //   pt={insets.top}
            pb={insets.bottom}
            pl={insets.left}
            pr={insets.right}
          >
            <Slot />
          </LayoutSafeArea>
        </ThemeProvider>
      </GlobalProvider>
    </FontLoader>
  );
}

const LayoutSafeArea = styled.View<LayoutSafeAreaProps>`
  flex: 1;
  padding-top: ${(props) => props.pt}px;
  padding-right: ${(props) => props.pr}px;
  padding-bottom: ${(props) => props.pb}px;
  padding-left: ${(props) => props.pl}px;
`;
