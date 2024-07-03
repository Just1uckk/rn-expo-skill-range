import { Text, TouchableOpacity, View, TextInput, Button } from "react-native";

import styled from "styled-components/native";
import Header from "../components/UI/header/header";
import { useContext, useState } from "react";
import DrawerComponent from "../components/UI/rightDrawer.tsx/rightDrawer";
import Divider from "../components/UI/divider/divider";
import LinkedinButton from "../components/UI/buttons/linkedin";
import { AntDesign } from "@expo/vector-icons";
import PaddingContainer from "../components/UI/containers/container";
import { router } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import API from "../components/utils/api";
import { GlobalContext } from "../components/utils/state/globalState";

export default function AuthPage() {
  const insets = useSafeAreaInsets();
  const context = useContext(GlobalContext);

  if (!context) {
    throw new Error("SomeComponent must be used within a GlobalProvider");
  }

  const { state, setState } = context;

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | undefined>();

  const toggleDrawer = () => {
    // router.push("/preferences");
    setDrawerOpen(!drawerOpen);
  };

  const handleRegister = async () => {
    setError(undefined)
    const response = await API.base?.register({
      user: {
        email,
        password,
        first_name: firstName,
        last_name: lastName,
        birthday: "",
      },
      shouldValidate: false,
      validateOnlyUnique: true,
    });
    if (!response.error) {
      setState({
        ...state,
        user: response,
      });
      router.push("/preferences");
    } else {
      setError(response.error)
    }
  };

  return (
    <Container pt={insets.top}>
      <Header toggleDrawer={toggleDrawer} />
      <Body>
        <PaddingContainer display="flex" ai="center">
          <Title>Sign up to get started</Title>
        </PaddingContainer>
        <PaddingContainer pt={10}>
          <PaddingContainer fd="row" jc="space-between" pt={20}>
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
          </PaddingContainer>
          <PaddingContainer fd="row" jc="space-between" pt={20}>
            <InputColumn>
              <InputField
                placeholder="Email address"
                onChangeText={setEmail}
                value={email}
                autoCapitalize="none"
              />
            </InputColumn>
          </PaddingContainer>
          <PaddingContainer fd="row" jc="space-between" pt={20}>
            <InputColumn>
              <InputField
                placeholder="Password"
                onChangeText={setPassword}
                value={password}
                autoCapitalize="none"
                secureTextEntry
              />
              <InputFieldSubTitle>
                One number and 8 characters minimum
              </InputFieldSubTitle>
              {error && <PaddingContainer pt={10} display="flex" jc="center" ai="center"><ErrorText>{error}</ErrorText></PaddingContainer>}
            </InputColumn>
          </PaddingContainer>
        </PaddingContainer>
        <PaddingContainer
          display="flex"
          jc="center"
          ai="center"
          pt={40}
          pb={15}
        >
          <JoinButton
            onPress={handleRegister}
            disabled={!(firstName && lastName && email && password)}
          >
            <ButtonText
              disabled={!(firstName && lastName && email && password)}
            >
              Join for free
            </ButtonText>
          </JoinButton>
        </PaddingContainer>
        <Divider text="or" />
        <LinkedinButton
          icon={<AntDesign name="linkedin-square" size={28} color="white" />}
          title="Sign in with LinkedIn"
          pt={15}
          onPress={() => {
            console.log("work!");
          }}
        />
        <PaddingContainer
          display="flex"
          fd="row"
          jc="center"
          ai="center"
          pt={20}
        >
          <ContainerText>Already on Skill Range? </ContainerText>
          <TouchableOpacity>
            <ContainerLinkText>Log in</ContainerLinkText>
          </TouchableOpacity>
        </PaddingContainer>
        <Divider />
        <PaddingContainer display="flex" fd="row" jc="center" ai="center">
          <ContainerText>I accept Skill Range's </ContainerText>
          <TouchableOpacity>
            <ContainerLinkText>Terms of</ContainerLinkText>
          </TouchableOpacity>
        </PaddingContainer>
        <PaddingContainer display="flex" fd="row" jc="center" ai="center">
          <ContainerLinkText>Services</ContainerLinkText>
          <ContainerText> and </ContainerText>
          <TouchableOpacity>
            <ContainerLinkText>Privacy policy</ContainerLinkText>
          </TouchableOpacity>
        </PaddingContainer>
      </Body>
      <DrawerComponent drawerClose={toggleDrawer} drawerOpen={drawerOpen} />
    </Container>
  );
}

const Container = styled.View<{ pt?: number }>`
  height: 100%;
  padding-top: ${(props) => (`${props.pt}px` ? props.pt : 0)};
`;

const Body = styled.View`
  padding: 40px 6% 0 6%;
  height: 100%;
`;

const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.main};
  font-size: 24px;
  font-weight: 600;
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

const JoinButton = styled.TouchableOpacity<{ disabled: boolean }>`
  background-color: ${(props) => (props.disabled ? "lightgray" : "#21CE99")};
  width: 90%;
  padding: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  opacity: ${(props) => (props.disabled ? "0.5" : "1")};
`;

const ButtonText = styled.Text<{ disabled: boolean }>`
  font-family: ${(props) => props.theme.fonts.main};
  font-size: 22px;
  font-weight: 800;
  color: ${(props) => (props.disabled ? "gray" : "white")};
  opacity: ${(props) => (props.disabled ? "0.5" : "1")};
`;

const ContainerText = styled.Text`
  font-family: ${(props) => props.theme.fonts.main};
  font-size: 16px;
  font-weight: 600;
`;

const ContainerLinkText = styled.Text`
  color: ${(props) => props.theme.colors.mainFirst};
  font-family: ${(props) => props.theme.fonts.main};
  font-size: 16px;
  font-weight: 600;
`;

const ErrorText = styled.Text`
  color: red;
  font-family: ${(props) => props.theme.fonts.main};
  font-size: 16px;
`
