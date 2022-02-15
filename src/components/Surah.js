import { Container, Row, Col, Button, Card, Spinner } from "react-bootstrap";
import { useEffect, useLayoutEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import './Surah.css';

function Surah() {
    const [surah, setSurah] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(function() {
        async function getSurah() {
            const request = await fetch('https://api.quran.sutanlab.id/surah');
            const response = await request.json();

            setSurah(response.data);
            setLoading(false);
        }
        getSurah();
    }, []);

    useLayoutEffect(function() {
        window.scrollTo(0, 0);
    });

    if(loading) {
        return (
            <>
                <Container className="loading-wrapper">
                    <h1 className="loading text-center">Loading Surah <Spinner animation="border" /></h1>
                </Container>
            </>
        )
    }

    return (
        <>
            <Helmet>
                <title>Qur'an Digital</title>
            </Helmet>
            <Container className="title-container">
                <h1 className="title-content">Qur'an Digital</h1>
                <h3 className="title-subcontent">Daftar Surah</h3>
            </Container>
            <Container className="surah-container">
                <Row xs={1} sm={2} md={2} lg={3}>
                {surah.map(function(surat) {
                    return (
                        <Col key={surat.number} className="surah-wrapper">
                            <Card className="surah-card">
                                <Card.Body>
                                <h4 className="surah-title">
                                        <span className="surah-number">
                                            {surat.number < 10 ? '0' + surat.number : surat.number}
                                        </span>
                                        {surat.name.transliteration.id} 
                                        <span className="surah-title-arabic">
                                            ({surat.name.short})
                                        </span>
                                    </h4>
                                    <p className="surah-arti">"{surat.name.translation.id}"</p>
                                    <p className="surah-revelation">{surat.revelation.id}</p>
                                    <Button className="btn-read-surah shadow-none" variant="light"><Link to={`/surah/${surat.number}`}>Baca Surah</Link></Button>
                                    <Button className="btn-read-tafsir shadow-none" variant="light">Tafsir</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                })}
                </Row>
            </Container>
        </>
    )
}

export default Surah;