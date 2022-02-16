import { Button, Collapse } from "react-bootstrap";
import { useState } from "react";
import './Tafsir.css';

function Tafsir(props) {
    const [open, setOpen] = useState(false);
    
    function tafsirHandler() {
        setOpen(!open);
    }

    return (
        <>
            <Button 
                className="btn-read-tafsir shadow-none" 
                variant="light"
                onClick={tafsirHandler}
                >
                    Tafsir
            </Button>
            <Collapse in={open}>
                <p className="tafsir-text">{props.children}</p>
            </Collapse>
        </>
    )
}

export default Tafsir;