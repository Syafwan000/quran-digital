import { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import './Surah.css';

function Surah() {
    const [surah, setSurah] = useState([]);

    useEffect(function() {
        async function getSurah() {
            const request = await fetch('https://api.quran.sutanlab.id/surah');
            const response = await request.json();

            setSurah(response.data);
        }
        getSurah();
    }, []);

    return (
        <>
            <Helmet>
                <title>Qur'an Digital</title>
            </Helmet>
            <Container className="surah-container">
                <Row xs={1} sm={2} md={2} lg={3}>
                {surah.map(function(surat) {
                    return (
                        <Col key={surat.sequence} className="surah-wrapper">
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
                            <Button className="btn-read-surah" variant="light"><Link to={`/surah/${surat.number}`}>Baca Surah</Link></Button>
                            <Button className="btn-read-tafsir" variant="light">Tafsir</Button>
                        </Col>
                    )
                })};
                </Row>
            </Container>
            <ul>
            
                
            
            </ul>
        </>
    )
}

export default Surah;