import { Route, Routes } from "react-router-dom";
import NavbarTop from "./components/NavbarTop";
import Surah from "./components/Surah";
import Ayat from "./components/Ayat";
import About from "./components/About";
import NotFound from "./components/NotFound";

function App() {
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
