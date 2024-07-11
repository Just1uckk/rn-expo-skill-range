import { router } from "expo-router";
import { FunctionComponent, useContext, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import styled from "styled-components/native";

import { LanguageList } from "../../components/constants/constants";
import ContinueButton from "../../components/UI/buttons/continue/continue";
import PaddingContainer from "../../components/UI/containers/container";
import PreferencesHeader from "../../components/UI/header/preferencesHeader/preferencesHeader";
import InterractiveInput from "../../components/UI/input/interractiveInput/interractiveInput";
import TextField from "../../components/UI/textField/textField";
import { GlobalContext } from "../../components/utils/state/globalState";

const Preferences: FunctionComponent = () => {
  const insets = useSafeAreaInsets();
  const context = useContext(GlobalContext);

  if (!context) {
    throw new Error("SomeComponent must be used within a GlobalProvider");
  }

  const { state } = context;

  const [name, setName] = useState(state.user ? state.user.first_name : "");
  const [card, setCard] = useState(LanguageList[0].id);

  return (
    <Container pt={insets.top}>
      <PreferencesHeader
        toggleBack={router.back}
        toggleDrawer={() => {}}
      />
      <PaddingContainer pt={75}>
        <TextField fs={20}>What should we call you?</TextField>
      </PaddingContainer>
      <InterractiveInput value={name} handleChange={setName} />
      <PaddingContainer pt={50}>
        <TextField fs={20}>
          Please select your preferred language for your AI conversations?
        </TextField>
      </PaddingContainer>
      <CardContainer>
        {LanguageList.map((element) => (
          <Card
            key={element.id}
            isActive={card === element.id}
            onPress={() => {
              setCard(element.id);
            }}
          >
            <TextField fs={18} c={(card === element.id) ? "white" : "#0F0F0F"}>{element.title}</TextField>
          </Card>
        ))}
      </CardContainer>
      <ContinueButton
        pb={insets.bottom + 15}
        onPress={() => {}}
        title="Continue"
      />
    </Container>
  );
};

const Container = styled.View<{ pt?: number }>`
  padding-top: ${(props) => (props.pt ? `${props.pt}px` : 0)};
  padding-right: 5%;
  padding-left: 5%;
  height: 100%;
`;

const CardContainer = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-top: 32px;
`;

const Card = styled.TouchableHighlight<{ isActive: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0 10px 0;
  border: 2px solid #f5f5f5;
  border-radius: 4px;
  margin-top: 10px;
  width: 30%;
  background-color: ${(props) => (props.isActive ? "#0F0F0F" : "transparent")};
`;

export default Preferences;
