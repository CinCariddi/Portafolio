import './AboutMe.css'
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../../Imagenes/header-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export default function Studies() {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = [ "Desarrolladora Web", "Futura Ingeniera" ];
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
        tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
        setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setIndex(prevIndex => prevIndex - 1);
        setDelta(period);
        } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setIndex(1);
        setDelta(500);
        } else {
        setIndex(prevIndex => prevIndex + 1);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="aligh-items-center">
                <Col xs={12} md={6} xl={7}>
                    <TrackVisibility>
                    {({ isVisible }) =>
                    <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                        <h1>{`Hola! Soy Cintia, `} <h2 className="txt-rotate" dataPeriod="1000" data-rotate='[ "Desarrolladora Web", "Futura Ingeniera" ]'><h2 className="wrap">{text}</h2></h2></h1>
                        <p width='100vw !important'>Full Stack developer proactiva y eficiente, rapida para adquirir nuevos conocimientos, que puede adaptarse facilmente a entornos de cambios constantes y sin miedo para trabajar bajo presion. Lista para integrarse en equipos multidisciplinarios y trabajar bajo metodologias agiles orientadas hacia objetivos.</p>
                        {/* <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button> */}
                    </div>}
                    </TrackVisibility>
                </Col>
                <Col xs={12} md={6} xl={5}>
                    <TrackVisibility>
                    {({ isVisible }) =>
                        <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                        <img src={headerImg} alt="Header Img" width='400vw'/>
                        </div>}
                    </TrackVisibility>
                </Col>
                </Row>
            </Container>
        </section>
    );
}