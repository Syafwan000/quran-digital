import { Container, Navbar, Nav } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FiBookOpen } from "react-icons/fi";
import { Link } from "react-router-dom";
import './NavbarTop.css';

function NavbarTop() {
    return (
        <>
            <Navbar className="nav-bg" variant="dark" fixed="top">
                <Container>
                <Navbar.Brand className="nav-brand"><Link to="/"><FiBookOpen />&nbsp;&nbsp;Qur'an Digital</Link></Navbar.Brand>
                    <Nav className="nav-list ms-auto">
                        <a href="https://github.com/Syafwan000/quran-digital" target="_blank" rel="noreferrer"><AiFillGithub /></a>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default NavbarTop;