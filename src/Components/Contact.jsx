import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import '../Style/Contact.css'
import CV from '../Archivos/CV Cintia.pdf'
import Perfil from '../Archivos/Profile.pdf'
import SaveIcon from '@mui/icons-material/Save'
import styled from 'styled-components';

export default function Contact() {
    return (
        <Parent>
            <div className='div1'>
                <h2>Contactame</h2>
            </div>
            <div className='div2'>
                <a href='https://github.com/CinCariddi' target='_blank'>
                    <GitHubIcon  sx={{ color: '#4527a0' }} />
                </a>
                <p>GitHub</p>
            </div>
            <div className='div3'>
                <a href='https://www.linkedin.com/in/cintiacariddi/' target='_blank'>
                    <LinkedInIcon sx={{ color: '#4527a0' }}/>
                </a>
                <p>LinkedIn</p>
            </div>
            <div className='div4'>
                <a href='mailto:cintiacariddi@gmail.com'>
                    <EmailIcon sx={{ color: '#4527a0' }}/>
                </a>
                <p>Mail</p>
            </div>
            <div className='div5'>
                <a href='mailto:cintiacariddi@gmail.com'>
                    <WhatsAppIcon sx={{ color: '#4527a0' }}/>
                </a>
                <p>WhatsApp</p>
            </div>
            <div className='div6'>
                <a download='CV' href={CV}>
                    <Button variant='text' startIcon={<SaveIcon />} className='btn'>
                        Descargar CV
                    </Button>
                </a>
            </div>
            <div className='div7'>
                <a download='PerfilLinkeIn' href={Perfil}>
                    <Button variant='text' startIcon={<SaveIcon />} className='btn'>
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
    height: 30vh;
    align-items: center; 
    justify-items: center;
    margin-left: 5%;
    margin-right: 5%;
`