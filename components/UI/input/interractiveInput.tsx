import { FunctionComponent } from "react";
import styled from "styled-components/native";
import PaddingContainer from "../containers/container";
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface InterractiveInputProps {}

const InterractiveInput: FunctionComponent<InterractiveInputProps> = () => {
  return (
    <PaddingContainer pt={20}>
      <GrayContainer>
        <ContainerText>Jessica</ContainerText>
        <LabelText>First Name</LabelText>
        <IconContainer>
        <MaterialCommunityIcons name="pencil-box-multiple-outline" size={24} color="black" />
        </IconContainer>
      </GrayContainer>
    </PaddingContainer>
  );
};

const GrayContainer = styled.View`
  width: 100%;
  background-color: #e6e6e6;
  border-radius: 10px;
`;

const ContainerText = styled.Text`
  font-family: ${(props) => props.theme.fonts.main};
  font-size: 20px;
  padding: 20px 10px 10px 10px;
`;

const LabelText = styled.Text`
  position: absolute;
  top: 5px;
  left: 10px;
  color: ${(props) => props.theme.colors.mainFirst};
  font-family: ${(props) => props.theme.fonts.main};
  font-size: 14px;
`;

const IconContainer = styled.View`
    position: absolute;
    right: 10px;
    top:28%;
`

export default InterractiveInput;
