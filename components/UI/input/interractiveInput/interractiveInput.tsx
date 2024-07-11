import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FunctionComponent, useState } from "react";
import { TouchableHighlight } from "react-native";
import styled from "styled-components/native";

import PaddingContainer from "../../containers/container";

import { InterractiveInputProps } from "./interfaces";

const InterractiveInput: FunctionComponent<InterractiveInputProps> = ({
  value,
  handleChange,
}) => {
  const [isShowInput, setIsShowInput] = useState(false);
  return (
    <PaddingContainer pt={20}>
      <GrayContainer>
        {isShowInput ? (
          <GrayInput value={value} onChangeText={handleChange} />
        ) : (
          <ContainerText>{value}</ContainerText>
        )}
        {/* <ContainerText>{name}</ContainerText> */}
        <LabelText>First Name</LabelText>
        <IconContainer>
          {isShowInput ? (
            <TouchableHighlight
              onPress={() => {
                setIsShowInput(false);
              }}
            >
              <AntDesign name="check" size={24} color="black" />
            </TouchableHighlight>
          ) : (
            <TouchableHighlight
              onPress={() => {
                setIsShowInput(true);
              }}
            >
              <MaterialCommunityIcons
                name="pencil-box-multiple-outline"
                size={24}
                color="black"
              />
            </TouchableHighlight>
          )}
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
  top: 28%;
`;

const GrayInput = styled.TextInput`
  font-family: ${(props) => props.theme.fonts.main};
  font-size: 20px;
  padding: 18px 10px 8px 10px;
`;

export default InterractiveInput;
