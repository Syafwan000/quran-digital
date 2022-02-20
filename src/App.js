import { Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { useState } from "react";
import NavbarTop from "./components/NavbarTop";
import Surah from "./components/Surah";
import Ayat from "./components/Ayat";
import About from "./components/About";
import NotFound from "./components/NotFound";
import Logo from "./img/logo.png";
import 'animate.css';
import './App.css';

function App() {
  const [preload, setPreload] = useState(true);

  setTimeout(function() {
    setPreload(false);
  }, 1500);

  if(preload) {
    return (
      <>
        <Helmet>
          <title>Qur'an Digital</title>
        </Helmet>
        <Container fluid className="animate__animated animate__fadeOut animate__delay-1s preload-screen d-flex justify-content-center align-items-center">
          <div className="logo-wrapper">
            <img className="logo-preload" src={Logo} alt="Qur'an Digital" />
            <h3 className="title-preload text-center">Qur'an Digital</h3>
          </div>
        </Container>
      </>
    )
  }

  return (
    <>
      <NavbarTop />
      <Routes>
        <Route path="/" element={<Surah />}></Route>
        <Route path="/surah/:id" element={<Ayat />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  )
}

export default App;
