import { FunctionComponent, ReactElement } from "react";
import styled from "styled-components/native";

interface LinkedinButtonProps extends PaddingProps {
    title: string;
    icon?: ReactElement;
    disabled?: boolean
    onPress: () => void;
}

export interface PaddingProps {
  pt?: number;
  pb?: number;
  pl?: number;
  pr?: number;
}

const LinkedinButton: FunctionComponent<LinkedinButtonProps> = ({
  pt,
  pb,
  pl,
  pr,
  title,
  icon,
  disabled = false,
  onPress
}) => {
  return (
    <LinkedInButtonContainer pt={pt} pb={pb} pl={pl} pr={pr}>
      <LinkedInButton disabled={disabled}>
        {icon && <IconWrapper>{icon}</IconWrapper>}
        <ButtonText disabled={disabled}>{title}</ButtonText>
      </LinkedInButton>
    </LinkedInButtonContainer>
  );
};

const LinkedInButtonContainer = styled.View<PaddingProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: ${(props) => props.pt}px;
  padding-right: ${(props) => props.pr}px;
  padding-bottom: ${(props) => props.pb}px;
  padding-left: ${(props) => props.pl}px;
`;

const LinkedInButton = styled.TouchableOpacity<{ disabled: boolean }>`
  background-color: ${(props) => (props.disabled ? "lightgray" : "#0077B5")};
  width: 90%;
  padding: 18px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  opacity: ${(props) => (props.disabled ? "0.5" : "1")};
`;
const ButtonText = styled.Text<{ disabled: boolean }>`
  font-family: ${(props) => props.theme.fonts.main};
  font-size: 20px;
  font-weight: 800;
  color: ${(props) => (props.disabled ? "gray" : "white")};
  opacity: ${(props) => (props.disabled ? "0.5" : "1")};
`;

const IconWrapper = styled.View`
  margin-right: 8px;
`;

export default LinkedinButton;
