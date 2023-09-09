import { styled } from "styled-components";
import { colors } from "../globalVars";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    margin: 0;
`;

export const StyledTextInput = styled.input`
    flex: 1;
    padding: 15px;
    padding-left: 50px;
    font-size: 17px;
    letter-spacing: 1px;
    color: ${colors.primary};
    background-color: ${colors.white};
    border: 1px solid ${colors.theme};
    outline: 0;
    display: block;
    margin: 5px auto 10px auto;
    transition: ease-in-out 0.3s;
`;

export const StyledIcon = styled.p`
    color: ${colors.primary};
    font-size: 21px;
    padding: 10px;
    cursor: pointer;
`;

export const TextInputContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;