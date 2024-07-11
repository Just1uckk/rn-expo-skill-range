import styled from "styled-components/native";

import { TextFieldProps } from "./interfaces";
 
const TextField = ({fs, fw, o, c, children}:TextFieldProps) => {
    return ( 
        <StyledTextField fs={fs} fw={fw} o={o} c={c}>
            {children}
        </StyledTextField>
     );
}

const StyledTextField = styled.Text<TextFieldProps>`
    font-family: ${(props) => props.theme.fonts.main};
    font-size: ${(props) => props.fs ? `${props.fs}px` : '16px'};
    font-weight: ${(props) => props.fw ? props.fw : 600};
    opacity: ${(props) => props.o ? props.o : 1};
    color: ${(props) => props.c ? props.c : '#0F0F0F'};
`
 
export default TextField;