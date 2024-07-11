import { FunctionComponent } from "react";
import styled from "styled-components/native";
import { ContainerProps } from "./interfaces";

const PaddingContainer: FunctionComponent<ContainerProps> = ({
  children,
  pt,
  pb,
  pl,
  pr,
  jc,
  ai,
  fd,
  display,
}) => {
  return (
    <DefaultContainer
      pt={pt}
      pb={pb}
      pl={pl}
      pr={pr}
      jc={jc}
      ai={ai}
      fd={fd}
      display={display}
    >
      {children}
    </DefaultContainer>
  );
};

const DefaultContainer = styled.View<ContainerProps>`
  padding-top: ${(props) => props.pt ? `${props.pt}px` : 0};
  padding-right: ${(props) => props.pr ? `${props.pr}px` : 0};
  padding-bottom: ${(props) => props.pb ? `${props.pb}px` : 0};
  padding-left: ${(props) => props.pl ? `${props.pl}px` : 0};
  justify-content: ${(props) => props.jc};
  align-items: ${(props) => props.ai};
  flex-direction: ${(props) => props.fd};
  display: ${(props) => props.display};
`;

export default PaddingContainer;
