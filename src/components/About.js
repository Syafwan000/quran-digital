import { Container } from "react-bootstrap";
import { SiReact } from "react-icons/si";
import './About.css';

function About() {
    return (
        <>
            <Container className="about-wrapper">
                <h3 className="about-title">About</h3>
                <p>Data diambil dari <a className="about-link" href="https://api.quran.sutanlab.id/" target="_blank" rel="noreferrer">Quran API</a> (<a className="about-link" href="https://github.com/sutanlab" target="_blank" rel="noreferrer">sutanlab</a>)</p>
                <p>Dibuat dengan React <SiReact className="logo-react" /></p>
                <p>Qur'an Digital &copy; 2022 - Present | <a className="about-link" href="https://github.com/syafwan000" target="_blank" rel="noreferrer">Muhammad Syafwan Ardiansyah</a></p>
            </Container>
        </>
    )
}

export default About;