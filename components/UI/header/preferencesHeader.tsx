import { FunctionComponent } from "react";
import styled from "styled-components/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import TextField from "../textField/textField";

interface PreferencesHeaderProps {
  toggleDrawer: () => void;
  toggleBack: () => void;
}

const PreferencesHeader: FunctionComponent<PreferencesHeaderProps> = ({
  toggleDrawer,
  toggleBack
}) => {
  return (
    <HeaderContainer>
      <HeaderColumn width="15%">
      <TouchableOpacity onPress={toggleBack}>
        <MaterialCommunityIcons
          name="arrow-left-bold-box-outline"
          size={35}
          color="white"
        />
        </TouchableOpacity>
      </HeaderColumn>
      <HeaderColumn width="70%">
        <TextField fs={20} c={'white'}>Preferences</TextField>
      </HeaderColumn>
      <HeaderColumn style={{ alignItems: "flex-end" }} width="15%">
        <TouchableOpacity onPress={toggleDrawer}>
          <FontAwesome name="list-ul" size={20} color="white" />
        </TouchableOpacity>
      </HeaderColumn>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

const HeaderColumn = styled.View<{ width: string }>`
  width: ${(props) => props.width};
  display: flex;
`;

export default PreferencesHeader;
