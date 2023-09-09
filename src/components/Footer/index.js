import { FaGithub, FaLinkedin } from "react-icons/fa";
import { StyledIcon } from "../ProductsList/style";
import { FooterContainer, IconsContainer, InfoContainer, StyledLabel } from "./style"

const Footer = () => {
    return (
        <FooterContainer>
            <InfoContainer>
                <StyledLabel>Wesley Felipe Gurgel de Almeida</StyledLabel>
            </InfoContainer>
            <IconsContainer>
                    <StyledIcon onClick={() => window.open('https://www.linkedin.com/in/wesley-felipe/','mywindow')}>
                        <FaLinkedin />
                    </StyledIcon>
                    <StyledIcon onClick={() => window.open('https://github.com/wesleyDM14/','mywindow')}>
                        <FaGithub />
                    </StyledIcon>
                </IconsContainer>
        </FooterContainer>
    )
}

export default Footer;