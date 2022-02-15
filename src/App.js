import { Route, Routes } from "react-router-dom";
import NavbarTop from "./components/NavbarTop";
import Surah from "./components/Surah";
import Ayat from "./components/Ayat";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavbarTop />
      <Routes>
        <Route path="/" element={<Surah />}></Route>
        <Route path="/surah/:id" element={<Ayat />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App;
