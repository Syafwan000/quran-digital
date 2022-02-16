import { Container, Row, Col, Navbar, Nav, Spinner } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { FiChevronsLeft } from "react-icons/fi";
import { useEffect, useLayoutEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Footer from "./Footer";
import './Ayat.css';

function Ayat() {
    const params = useParams();
    const [nameSurah, setNameSurah] = useState('');
    const [surahKe, setSurahKe] = useState('');
    const [totalAyat, setTotalAyat] = useState('');
    const [ayat, setAyat] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(function() {
        async function getAyat() {
            const request = await fetch(`https://api.quran.sutanlab.id/surah/${params.id}`);
            const response = await request.json();

            setNameSurah(response.data.name.transliteration.id);
            setSurahKe(response.data.number);
            setTotalAyat(response.data.numberOfVerses);
            setAyat(response.data.verses);
            setLoading(false);
        }
        getAyat();
    }, [params]);

    useLayoutEffect(function() {
        window.scrollTo(0, 0);
    });

    if(loading) {
        return (
            <>
                <Container>
                    <h1 className="loading text-center">Loading Ayat <Spinner animation="border" /></h1>
                </Container>
            </>
        )
    }

    return (
        <>
            <Helmet>
                <title>Surah {nameSurah}</title>
            </Helmet>
            <Navbar className="nav-surah" variant="dark" fixed="top">
                <Container>
                <Navbar.Brand className="nav-surah-title">
                    Surah {nameSurah}
                    <p className="nav-total-ayat">{totalAyat} Ayat</p>
                </Navbar.Brand>
                    <Nav className="nav-back ms-auto">
                        <Link to="/"><FiChevronsLeft /> Kembali</Link>
                    </Nav>
                </Container>
            </Navbar>
            <Container className="ayat-container">
                {surahKe >= 2 &&
                    <span className="bismillah-wrapper">
                        <p className="bismillah">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</p>        
                    </span>
                }
                {ayat.map(function(a) {
                    return (    
                    <Row key={a.number.inSurah}>
                        <Col className="ayat-wrapper">
                            <p className="ayat">{a.text.arab}</p>
                            <p className="ayat-translation">
                                <span className="ayat-number">{a.number.inSurah}</span> {a.translation.id}
                            </p>
                            <audio controls src={a.audio.primary}></audio>
                        </Col>
                    </Row>
                    )
                })}
            </Container>
            <Footer />
        </>
    )
}

export default Ayat;