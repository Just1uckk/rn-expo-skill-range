import { Text, View } from "react-native";

import styled from "styled-components/native";
import Logo from "../assets/images/Skill Range Logo.svg"

export default function Page() {
  return (
    <Container>
      <StyledText>Hello, Styled Components!</StyledText>
      <Logo width={200} height={200} />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: papayawhip;
`;

const StyledText = styled.Text`
  font-size: 24px;
  color: palevioletred;
`;
