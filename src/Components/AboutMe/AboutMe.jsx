import './AboutMe.css'
import { useState, useEffect } from "react";
import { useTheme } from '../../Modules/ThemeContext';
import astronauta from '../../Asset/astronauta.PNG'

export default function AboutMe() {
    const { dark } = useTheme(); 
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = [ "Desarrolladora Web" ];
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
        <div className={`content-about-me ${dark ? 'dark-about-me' : 'light-about-me'}`}>
            <div className='about-me-title'>
                <h1>{`Hola! Soy Cintia, `} <h2 className="txt-rotate" dataPeriod="1000" data-rotate='[ "Desarrolladora Web" ]'><h2 className="wrap">{text}</h2></h2></h1>
                <p>
                    Con experiencia en tecnologías como React, Node.js y bases de datos SQL/NoSQL, he desarrollado soluciones eficientes que han mejorado el rendimiento de las aplicaciones en las que he trabajado. Mi capacidad para integrarme rápidamente en equipos y proyectos me ha permitido aportar desde el primer día, siempre con un enfoque hacia la mejora continua y la innovación.
                </p>
                {/*<a download='CV' href=''>
                    Descargar CV
                </a>
                <a download='PerfilLinkeIn' href=''>
                    Descargar Perfil LinkedIn
                </a>*/}
            </div>
            <div className='about-me-img-content'>
                <img src={astronauta} alt="img not found" className='about-me-img'/>
            </div>
        </div>
    )
}