import { Container, HeaderContainer, Logo } from "./style"


const Header = () => {
    return (
        <HeaderContainer>
            <Container>
                <Logo />
                <h5>Header</h5>
            </Container>
        </HeaderContainer>
    )
}

export default Header;