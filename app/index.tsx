import { Text, TouchableOpacity, View, TextInput, Button } from "react-native";

import styled from "styled-components/native";
import Header from "../components/UI/header/header";
import { useState } from "react";
import DrawerComponent from "../components/UI/rightDrawer.tsx/rightDrawer";
import Divider from "../components/UI/divider/divider";

export default function AuthPage() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Container>
      <Header toggleDrawer={toggleDrawer} />
      <Body>
        <TitleContainer>
          <Title>Sign up to get started</Title>
        </TitleContainer>
        <InputForm>
          <InputRow>
            <InputColumn style={{ width: "48%" }}>
              <InputField
                placeholder="First Name"
                onChangeText={setFirstName}
                value={firstName}
                autoCapitalize="none"
              />
            </InputColumn>
            <InputColumn style={{ width: "48%" }}>
              <InputField
                placeholder="Last Name"
                onChangeText={setLastName}
                value={lastName}
                autoCapitalize="none"
              />
            </InputColumn>
          </InputRow>
          <InputRow>
            <InputColumn>
              <InputField
                placeholder="Email address"
                onChangeText={setEmail}
                value={email}
                autoCapitalize="none"
              />
            </InputColumn>
          </InputRow>
          <InputRow>
            <InputColumn>
              <InputField
                placeholder="Password"
                onChangeText={setPassword}
                value={password}
                autoCapitalize="none"
                secureTextEntry
              />
              <InputFieldSubTitle>One number and 8 characters minimum</InputFieldSubTitle>
            </InputColumn>
          </InputRow>
        </InputForm>
        <JoinButtonContainer>
          <JoinButton disabled>
            <ButtonText disabled>Join for free</ButtonText>
          </JoinButton>
        </JoinButtonContainer>
        <Divider text="or"/>
      </Body>
      <DrawerComponent drawerClose={toggleDrawer} drawerOpen={drawerOpen} />
    </Container>
  );
}

const Container = styled.View`
  height: 100%;
`;

const Body = styled.View`
  padding: 40px 6% 0 6%;
  height: 100%;
`;

const TitleContainer = styled.View`
  width: 100%;
  display: flex;
  align-items: center;
`;

const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.main};
  font-size: 24px;
  font-weight: 600;
`;

const InputForm = styled.View`
padding-top: 20px;
`;

const InputRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-top: 20px;
`;

const InputColumn = styled.View`
  width: 100%;
`;

const InputField = styled.TextInput`
  padding: 5px 15px;
  border: 1px solid lightgray;
  border-radius: 5px;
  font-family: ${(props) => props.theme.fonts.main};
`;

const InputFieldSubTitle = styled.Text`
  font-size: 12px;
  font-weight: 600;
  font-family: ${(props) => props.theme.fonts.main};
`;

const JoinButtonContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 0 20px 0;
`;

const JoinButton = styled.TouchableOpacity<{disabled: boolean}>`
  background-color: ${(props) => props.disabled ? 'lightgray' : '#21CE99'};
  width: 90%;
  padding: 18px;
  display:flex;
  justify-content:center;
  align-items: center;
  border-radius: 12px;
  opacity: ${(props) => props.disabled ? '0.5' : '1'};
`
const ButtonText = styled.Text<{disabled: boolean}>`
  font-family: ${(props) => props.theme.fonts.main};
  font-size: 22px;
  font-weight: 800;
  color: ${(props) => props.disabled ? 'gray' : 'wthite'};
  opacity: ${(props) => props.disabled ? '0.5' : '1'};
`