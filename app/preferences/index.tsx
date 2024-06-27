import { FunctionComponent, useContext, useEffect, useState } from "react";
import styled from "styled-components/native";
import PaddingContainer from "../../components/UI/containers/container";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import PreferencesHeader from "../../components/UI/header/preferencesHeader";
import { router } from "expo-router";
import InterractiveInput from "../../components/UI/input/interractiveInput";
import ContinueButton from "../../components/UI/buttons/continue";
import { GlobalContext } from "../../components/utils/state/globalState";

const LanguageList = [
  { id: 1, title: "English" },
  { id: 2, title: "French" },
  { id: 3, title: "German" },
  { id: 4, title: "Spanish" },
  { id: 5, title: "Arabic" },
  { id: 6, title: "Dutch" },
  { id: 7, title: "Hindi" },
  { id: 8, title: "Russian" },
  { id: 9, title: "Korean" },
  { id: 10, title: "Portuguese" },
  { id: 11, title: "Mandarin" },
  { id: 12, title: "Japanese" },
];

interface PreferencesProps {}

const Preferences: FunctionComponent<PreferencesProps> = () => {
  const insets = useSafeAreaInsets();

  const context = useContext(GlobalContext);

  if (!context) {
    throw new Error("SomeComponent must be used within a GlobalProvider");
  }

  const { state, setState } = context;

  const [name, setName] = useState(state.user ? state.user.first_name : "");
  const [card, setCard] = useState(LanguageList[0].id);
  return (
    <Container pt={insets.top}>
      <PreferencesHeader
        toggleBack={router.back}
        toggleDrawer={() => {
          "work";
        }}
      />
      <PaddingContainer pt={75}>
        <PreInputText>What should we call you?</PreInputText>
      </PaddingContainer>
      <InterractiveInput value={name} handleChange={setName} />
      <PaddingContainer pt={50}>
        <PreInputText>
          Please select your preferred language for your AI conversations?
        </PreInputText>
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
            <CardText isActive={card === element.id}>{element.title}</CardText>
          </Card>
        ))}
      </CardContainer>
      <ContinueButton
        pb={insets.bottom + 15}
        onPress={() => {
          console.log("continue");
        }}
        title="Continue"
      />
    </Container>
  );
};

const PreInputText = styled.Text`
  font-family: ${(props) => props.theme.fonts.main};
  font-size: 20px;
`;

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

const CardText = styled.Text<{ isActive: boolean }>`
  font-family: ${(props) => props.theme.fonts.main};
  font-size: 18px;
  color: ${(props) => (props.isActive ? "white" : "#0F0F0F")};
`;

export default Preferences;
