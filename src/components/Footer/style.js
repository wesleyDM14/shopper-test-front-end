import { styled } from "styled-components";
import { colors } from "../globalVars";

export const FooterContainer = styled.footer`
    display: flex;
    height: 30px;
    background-color: ${colors.theme};
    padding: 10px;
    align-items: center;
    justify-content: center;
    position: fixed;
    left:0;
    bottom:0;
    right:0;
`;

export const StyledLabel = styled.p`
    text-align: left;
    font-size: 13px;
    font-weight: bold;
`;

export const IconsContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const StyledIcons = styled.div`
    cursor: pointer;
    font-size: 21px;
    color: ${colors.primary};
`;

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
`;