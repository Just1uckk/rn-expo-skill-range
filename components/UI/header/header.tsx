import { FunctionComponent } from "react";
import styled from "styled-components/native";
import Logo from "../../../assets/images/Skill Range Logo.svg";
import { FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import SkillRangeLogo from "../../../components/icons/SkillRangeLogo";

interface HeaderProps {
  toggleDrawer: () => void
}

const Header: FunctionComponent<HeaderProps> = ({toggleDrawer}) => {
  return (
    <HeaderContainer>
      <LeftColumn>
        <SkillRangeLogo />
      </LeftColumn>
      <CenterColumn>
        <ColumnText>SKILLRANGE</ColumnText>
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
  /* background-color: #ccffcc; Цвет фона для проверки */
`;

const RightColumn = styled(Column)`
  width: 10%;
  /* background-color: #ccccff; Цвет фона для проверки */
`;

const ColumnText = styled.Text`
  font-size: 20px;
  font-family: ${(props) => props.theme.fonts.main};
`;

export default Header;
