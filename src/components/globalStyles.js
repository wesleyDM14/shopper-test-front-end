import { styled } from "styled-components";
import { colors } from "./globalVars";

export const FileInputLabel = styled.label`
    color: ${colors.primary};
    font-weight: 700;
    margin-left: 0.7rem;
`;

export const UploadButton = styled.button`
    color: white;
    ${(props) => !props.disabled && `background-color: ${colors.secondary};`};
    ${(props) => props.disabled && `background-color: ${colors.disabled};`};
    ${(props) => !props.disabled && `cursor: pointer;`};
    ${(props) => props.disabled && `cursor: default;`};
    padding: 10px 16px;
    font-weight: 800;
    border-radius: 10px;
    margin-left: 15px;
`;

export const UploadContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 15px;
    justify-content: center;
    align-items: center;
`;

export const MessageAlert = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 20px;
`;

export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: right;
    align-items: center;
`;

export const ValidationButton = styled.button`
    color: white;
    background-color: ${colors.secondary};
    padding: 10px 16px;
    font-weight: 800;
    border-radius: 10px;
    margin-left: 15px;
    cursor: pointer;
`;

export const AtualizarButton = styled.button`
    color: white;
    ${(props) => !props.disabled && `background-color: ${colors.secondary};`};
    ${(props) => props.disabled && `background-color: ${colors.disabled};`};
    ${(props) => !props.disabled && `cursor: pointer;`};
    ${(props) => props.disabled && `cursor: default;`};
    padding: 10px 16px;
    font-weight: 800;
    border-radius: 10px;
    margin-left: 15px;
`;

export const HomeBody = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 60px;
`;