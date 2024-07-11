import { FunctionComponent } from "react";
import styled from "styled-components/native";

import { PaddingProps } from "../../glogalInterfaces/interfaces";

import { DividerProps } from "./interfaces";

const Divider: FunctionComponent<DividerProps> = ({ text, pt, pb, pl, pr }) => {
  return (
    <DividerContainer pt={pt} pb={pb} pl={pl} pr={pr}>
      <DividerLine />
      {text && <DividerText>{text}</DividerText>}
    </DividerContainer>
  );
};

const DividerContainer = styled.View<PaddingProps>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  padding-top: ${(props) => (props.pt ? `${props.pt}px` : 0)};
  padding-right: ${(props) => (props.pr ? `${props.pr}px` : 0)};
  padding-bottom: ${(props) => (props.pb ? `${props.pb}px` : 0)};
  padding-left: ${(props) => (props.pl ? `${props.pl}px` : 0)};
`;

const DividerLine = styled.View`
  height: 1px;
  background-color: gray;
  width: 100%;
`;

const DividerText = styled.Text`
  color: black;
  font-family: ${(props) => props.theme.fonts.main};
  position: absolute;
  top: 0;
  font-size: 20px;
  background-color: white;
  padding: 5px;
`;

export default Divider;
