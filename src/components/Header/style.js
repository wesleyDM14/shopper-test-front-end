import { styled } from "styled-components";
import shooper_logo from '../../assets/shopper_logo.png';
import { colors } from "../globalVars";

export const HeaderContainer = styled.div`
    display: flex;
    background-color: ${colors.header};
    width: 100%;
    align-items: center;
    margin-bottom: 15px;
`;

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0px auto;
    height: 100px;
    width: 80%;
`;

export const Logo = styled.div`
    background-image: url(${shooper_logo});
    background-size: contain;
    background-repeat: no-repeat;
    max-width: 100%;
    width: 140px;
    height: 38px;
`;

export const Title = styled.h5`
    color: ${colors.white};
    font-size: 16px;
    font-weight: bold;
`;