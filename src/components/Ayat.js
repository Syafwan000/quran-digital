import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function Ayat() {
    const params = useParams();
    const [ayat, setAyat] = useState([]);

    useEffect(function() {
        async function getAyat() {
            const request = await fetch(`https://api.quran.sutanlab.id/surah/${params.id}`);
            const response = await request.json();

            setAyat(response);
        }
        getAyat();
    }, []);

    return (
        <>
            <Container className="surah-container">
                <Row>
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
                </Row>
            </Container>
        </>
    )
}

export default Ayat;