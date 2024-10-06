import { useState } from 'react'
import { useTheme } from '../../Modules/ThemeContext';
import emailjs from "@emailjs/browser";
import emailkeys from './EmailKeys.js';
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { SiGmail } from "react-icons/si";
import { MdMessage } from "react-icons/md";
import "./Contact.css"
import Swal from 'sweetalert2';

export default function Contact() {
    const { dark } = useTheme(); 
    const [input, setInput] = useState({
        name: "",
        email: "",
        message: "",
    })


    const handleSubmit = (e) => {
        e.preventDefault();
        emails(input.name, input.email, input.message)
    }

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
    }

    const emails = async (name, email, message) => {
        var templateParams = {
            from_name: name,
            from_email: email,
            reply_to: email,
            message: `${message}.`,
        };
        try {
            Swal.fire({
                title: "Enviando...",
                text: "Estamos procesando tu mensaje",
                showConfirmButton: false,
                allowOutsideClick: false,
                willOpen: () => {
                    Swal.showLoading();
                },
            });
            const response = await emailjs.send(
                emailkeys.service_id,
                emailkeys.templateMp_id,
                templateParams,
                emailkeys.public_key
            );
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Tu mensaje ha sido enviado con éxito",
                showConfirmButton: false,
                timer: 3000,
            });
            setInput({
                name: "",
                email: "",
                message: "",
            });
        } catch (error) {
            Swal.fire({
                position: "center",
                icon: "error",
                title: "Hubo un error al enviar tu mensaje",
                text: "Por favor intenta de nuevo más tarde.",
                showConfirmButton: true,
            });
            console.log("FAILED...", error);
        }
    };

    return (
        <div className={`content-contact ${dark ? 'dark-contact' : 'light-contact'}`}>
            <div className='content-networks'>
                <h2>Información de contacto</h2>
                <a href='https://github.com/CinCariddi' target='_blank' className='networks'>
                    <FaGithub className='form-icon'/>
                    <p>GitHub</p>
                </a>
                <a href='https://www.linkedin.com/in/cintiacariddi/' target='_blank' className='networks'>
                    <FaLinkedinIn className='form-icon'/>
                    <p>LinkedIn</p>
                </a>
                <a href='mailto:cintiacariddi@gmail.com' className='networks'>
                    <SiGmail className='form-icon'/>
                    <p>Mail</p>
                </a>
                <a href="https://wa.me/3515100570?text=¡Estoy+interesado!" target='_blank' className='networks'>
                    <FaWhatsapp className='form-icon'/>
                    <p>WhatsApp</p>
                </a>
            </div>
            <form onSubmit={(e) => handleSubmit(e)} className='content-form'>
                <h2>Contactame</h2>
                <div className='form'>
                    <label name='name' className='form-label'><IoPersonSharp className='form-icon'/>Nombre:</label>
                    <input placeholder='Nombre...' type='text' name='name' value={input.name} onChange={(e) => handleChange(e)} className='form-input' id='name' required />
                </div>
                <div className='form'>
                    <label name='email' className='form-label'><MdOutlineAlternateEmail className='form-icon'/>Mail:</label>
                    <input placeholder='Mail...' type='email' name='email' value={input.email} onChange={(e) => handleChange(e)} className='form-input' id='email' required />
                </div>
                <div className='form'>
                    <label name='message' className='form-label'><MdMessage className='form-icon'/>Mensaje:</label>
                    <textarea placeholder='Escribe tu mensaje aquí...' className='form-textarea' name='message' value={input.message} onChange={(e) => handleChange(e)} id='message' required></textarea>
                </div>
                <div className='form'>
                    <button type='submit' className='form-btn btn'>Enviar</button>
                </div>
            </form>
        </div>
    )
}