import { FunctionComponent } from "react";
import styled from "styled-components/native";
import { FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import SkillRangeLogo from "../../../icons/SkillRangeLogo";
import TextField from "../../textField/textField";
import { HeaderProps } from "./interfaces";

const Header: FunctionComponent<HeaderProps> = ({toggleDrawer}) => {
  return (
    <HeaderContainer>
      <LeftColumn>
        <SkillRangeLogo />
      </LeftColumn>
      <CenterColumn>
        <TextField fs={20}>SKILLRANGE</TextField>
      </CenterColumn>
      <RightColumn>
        <TouchableOpacity onPress={toggleDrawer}>
          <FontAwesome name="list-ul" size={20} color="black" />
        </TouchableOpacity>
      </RightColumn>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.View`
  flex-direction: row;
  height: auto;
  padding: 0 3%;
`;

const Column = styled.View`
  justify-content: bottom;
`;

const LeftColumn = styled(Column)`
  width: 10%;
`;

const CenterColumn = styled(Column)`
  width: 80%;
`;

const RightColumn = styled(Column)`
  width: 10%;
`;

export default Header;
