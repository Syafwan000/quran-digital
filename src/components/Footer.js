import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FiBookOpen } from "react-icons/fi";
import './Footer.css';

function Footer() {
    return (
        <>
            <footer>
                <Container className="text-center">
                    <p className="footer-brand"><FiBookOpen />&nbsp;&nbsp;Qur'an Digital&nbsp;|&nbsp;
                    <Link className="footer-about" to="/about">About</Link></p>
                    <p className="footer-create">Made by Muhammad Syafwan Ardiansyah</p>
                </Container>
            </footer>
        </>
    )
}

export default Footer;