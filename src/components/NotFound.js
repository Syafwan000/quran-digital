import { Button, Container } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import './NotFound.css';

function NotFound() {
    return (
        <>
            <Helmet>
                <title>404 Halaman Tidak Ditemukan</title>
            </Helmet>
            <Container className="notfound-wrapper text-center">
                <h3 className="notfound-title">404 Halaman Tidak Ditemukan</h3>
                <Button className="btn-back" varian="light">
                    <Link to="/">Kembali</Link>
                </Button>
            </Container>
        </>
    )
}

export default NotFound;