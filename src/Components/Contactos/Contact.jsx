import CV from '../../Archivos/CV Cintia.pdf'
import Perfil from '../../Archivos/Profile.pdf'
import styled from 'styled-components';
import mail from '../../Imagenes/Iconos/mail.png'
import gitbub from '../../Imagenes/Iconos/github.png'
import linkedin from '../../Imagenes/Iconos/linkedin.png'
import whatsapp from '../../Imagenes/Iconos/whatsapp.png'
import './Contact.css'

export default function Contact() {
    return (
        <Parent>
            <div className='div1'>
                <h2>Contactame</h2>
            </div>
            <div className='div2'>
                <a href='https://github.com/CinCariddi' target='_blank'>
                    <img src={gitbub}  alt='This is a Image' className='img'/>
                </a>
                <p>GitHub</p>
            </div>
            <div className='div3'>
                <a href='https://www.linkedin.com/in/cintiacariddi/' target='_blank'>
                    <img src={linkedin}  alt='This is a Image' className='img'/>
                </a>
                <p>LinkedIn</p>
            </div>
            <div className='div4'>
                <a href='mailto:cintiacariddi@gmail.com'>
                    <img src={mail}  alt='This is a Image' className='img'/>
                </a>
                <p>Mail</p>
            </div>
            <div className='div5'>
                <a href="https://wa.me/3515100570?text=¡Estoy+interesado!" target='_blank'>
                    <img src={whatsapp}  alt='This is a Image' className='img'/>
                </a>
                <p>WhatsApp</p>
            </div>
            <div className='div6'>
                <a download='CV' href={CV}>
                    <Button variant='text' className='btn'>
                        Descargar CV
                    </Button>
                </a>
            </div>
            <div className='div7'>
                <a download='PerfilLinkeIn' href={Perfil}>
                    <Button variant='text' className='btn'>
                        Descargar Perfil LinkedIn
                    </Button>
                </a>
            </div>
        </Parent>
    );
}

const Button = styled.div`
    background-color: #9575cd;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 1%;
    width: 20vw;
    font-family: 'Amatic SC', cursive
`

const Parent = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    height: 40vh;
    align-items: center; 
    justify-items: center;
`