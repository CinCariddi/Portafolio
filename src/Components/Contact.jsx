import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import '../Style/Contact.css'

export default function Contact() {
    return (
        <div className='contacto'>
            <div>
                <p>Medios de contacto:</p>
            </div>
            <div>
                <a href='https://github.com/CinCariddi' target='_blank'>
                    <GitHubIcon  sx={{ color: '#263238' }} />
                </a>
            </div>
            <div>
                <a href='https://www.linkedin.com/in/cintiacariddi/' target='_blank'>
                    <LinkedInIcon sx={{ color: '#263238' }}/>
                </a>
            </div>
            <div>
                <EmailIcon sx={{ color: '#263238' }}/>
            </div>
        </div>
    );
}
