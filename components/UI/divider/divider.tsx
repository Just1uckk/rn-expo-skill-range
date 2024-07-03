import { FunctionComponent } from "react";
import styled from "styled-components/native";
import { PaddingProps } from "../buttons/linkedin";

interface DividerProps extends PaddingProps {
    text?: string
}
 
const Divider: FunctionComponent<DividerProps> = ({text, pt, pb, pl, pr}) => {
    return ( 
        <DividerContainer pt={pt} pb={pb} pl={pl} pr={pr}>
            <DividerLine/>
            {text && <DividerText>{text}</DividerText>}
        </DividerContainer>
     );
}
 
const DividerContainer = styled.View<PaddingProps>`
  width: 100%;
  display:flex;
  justify-content:center;
  align-items: center;
  height: 40px;
  padding-top: ${(props) => props.pt}px;
  padding-right: ${(props) => props.pr}px;
  padding-bottom: ${(props) => props.pb}px;
  padding-left: ${(props) => props.pl}px;
`;

const DividerLine =  styled.View`
    height: 1px;
    background-color: gray;
    width: 100%;
`

const DividerText = styled.Text`
    color: black;
    font-family: ${(props) => props.theme.fonts.main};
    position: absolute;
    top:0;
    font-size: 20px;
    background-color: white;
    padding:5px;
`

export default Divider;