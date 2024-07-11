import { FunctionComponent, useEffect, useState } from "react";
import { Keyboard } from "react-native";
import styled from "styled-components/native";

import { PaddingProps } from "../../../glogalInterfaces/interfaces";

import { ContinueButtonProps } from "./interfaces";

const ContinueButton: FunctionComponent<ContinueButtonProps> = ({
  pt,
  pb,
  pl,
  pr,
  title,
  disabled = false,
  onPress,
}) => {
  const [keyboardOpen, setKeyboardOpen] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardOpen(true);
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardOpen(false);
      },
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  return (
    <ContinueButtonContainer pt={pt} pb={pb} pl={pl} pr={pr}>
      <ContinueButtonComponent isHide={keyboardOpen} disabled={disabled}>
        <ButtonText disabled={disabled}>{title}</ButtonText>
      </ContinueButtonComponent>
    </ContinueButtonContainer>
  );
};

const ContinueButtonContainer = styled.View<PaddingProps>`
  display: none;
  margin-top: auto;
  width: 100%;
  display: flex;
  padding-top: ${(props) => (props.pt ? `${props.pt}px` : 0)};
  padding-right: ${(props) => (props.pr ? `${props.pr}px` : 0)};
  padding-bottom: ${(props) => (props.pb ? `${props.pb}px` : 0)};
  padding-left: ${(props) => (props.pl ? `${props.pl}px` : 0)};
`;

const ContinueButtonComponent = styled.TouchableOpacity<{
  disabled: boolean;
  isHide: boolean;
}>`
  background-color: ${(props) =>
    props.disabled ? "lightgray" : props.theme.colors.mainFirst};
  width: 100%;
  padding: 14px;
  display: ${(props) => (props.isHide ? "none" : "flex")};
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  opacity: ${(props) => (props.disabled ? "0.5" : "1")};
`;
const ButtonText = styled.Text<{ disabled: boolean }>`
  font-family: ${(props) => props.theme.fonts.main};
  font-size: 25px;
  font-weight: 600;
  color: ${(props) => (props.disabled ? "gray" : "white")};
  opacity: ${(props) => (props.disabled ? "0.5" : "1")};
`;

export default ContinueButton;
