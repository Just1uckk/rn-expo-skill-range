import { FunctionComponent } from "react";
import styled from "styled-components/native";

interface DividerProps {
    text?: string
}
 
const Divider: FunctionComponent<DividerProps> = ({text}) => {
    return ( 
        <DividerContainer>
            <DividerLine/>
            {text && <DividerText>{text}</DividerText>}
        </DividerContainer>
     );
}
 
const DividerContainer = styled.View`
  width: 100%;
  display:flex;
  justify-content:center;
  align-items: center;
  height: 40px;
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