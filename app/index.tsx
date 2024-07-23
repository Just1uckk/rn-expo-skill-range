import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";
import { useContext, useState } from "react";
import { Pressable, View, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import styled from "styled-components/native";

import { useContextManager } from "../components/hooks/useContextManager";
import LinkedinButton from "../components/UI/buttons/linkedin/linkedin";
import PaddingContainer from "../components/UI/containers/container";
import Divider from "../components/UI/divider/divider";
import Header from "../components/UI/header/header/header";
import DrawerComponent from "../components/UI/rightDrawer.tsx/rightDrawer";
import TextField from "../components/UI/textField/textField";
import API from "../components/utils/api";
import { GlobalContext } from "../components/utils/state/globalState";

export default function AuthPage() {
  const insets = useSafeAreaInsets();
  const context = useContext(GlobalContext);
  const { state, setState } = useContextManager(context);

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | undefined>();

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleRegister = async () => {
    setError(undefined);
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
      router.push("/preferences/");
    } else {
      setError(response.error);
    }
  };

  return (
    <Container pt={insets.top}>
      <View>
      <Text>123</Text>
      </View>
      {/* <Header toggleDrawer={toggleDrawer} />
      <Body>
        <PaddingContainer display="flex" ai="center">
          <TextField fs={24}>Sign up to get started</TextField>
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
              <TextField fs={12}>One number and 8 characters minimum</TextField>
              {error && (
                <PaddingContainer
                  pt={10}
                  display="flex"
                  jc="center"
                  ai="center"
                >
                  <TextField c={"red"}>{error}</TextField>
                </PaddingContainer>
              )}
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
            <TextField
              fs={22}
              fw={800}
              c={
                !(firstName && lastName && email && password) ? "gray" : "white"
              }
              o={!(firstName && lastName && email && password) ? 0.5 : 1}
            >
              Join for free
            </TextField>
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
          <TextField fs={16}>Already on Skill Range? </TextField>
          <Pressable>
            <TextField c={"#21CE99"}>Log in</TextField>
          </Pressable>
        </PaddingContainer>
        <Divider />
        <PaddingContainer display="flex" fd="row" jc="center" ai="center">
          <TextField fs={16}>I accept Skill Range's </TextField>
          <Pressable>
            <TextField c={"#21CE99"}>Terms of</TextField>
          </Pressable>
        </PaddingContainer>
        <PaddingContainer display="flex" fd="row" jc="center" ai="center">
          <TextField c={"#21CE99"}>Services</TextField>
          <TextField fs={16}> and </TextField>
          <Pressable>
            <TextField c={"#21CE99"}>Privacy policy</TextField>
          </Pressable>
        </PaddingContainer>
      </Body>
      <DrawerComponent drawerClose={toggleDrawer} drawerOpen={drawerOpen} /> */}
    </Container>
  );
}

const Container = styled.View<{ pt?: number }>`
  height: 100%;
  padding-top: ${(props) => (props.pt ? `${props.pt}px` : 0)};
`;

const Body = styled.View`
  padding: 40px 6% 0 6%;
  height: 100%;
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

const JoinButton = styled.Pressable<{ disabled: boolean }>`
  background-color: ${(props) => (props.disabled ? "lightgray" : "#21CE99")};
  width: 90%;
  padding: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  opacity: ${(props) => (props.disabled ? "0.5" : "1")};
`;
