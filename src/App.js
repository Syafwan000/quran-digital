import { Container, Navbar, Nav } from "react-bootstrap";
import { Route, Routes, Link } from "react-router-dom";
import { FiBookOpen } from "react-icons/fi";
import Tentang from "./components/About";
import Surah from "./components/Surah";
import './App.css';
import Ayat from "./components/Ayat";

function App() {
  return (
    <>
      <Navbar className="nav-bg" variant="dark" fixed="top">
          <Container>
          <Navbar.Brand className="nav-brand"><Link to="/"><FiBookOpen />&nbsp;&nbsp;Qur'an Digital</Link></Navbar.Brand>
            <Nav className="nav-list ms-auto">
                <Link to="/about">About</Link>
            </Nav>
          </Container>
      </Navbar>
      <Container>
        
      </Container>
      <Routes>
        <Route path="/" element={<Surah />}></Route>
        <Route path="/surah/:id" element={<Ayat />}></Route>
        <Route path="/about" element={<Tentang />}></Route>
      </Routes>
    </>
  );
}

export default App;
