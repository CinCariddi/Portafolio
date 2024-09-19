import estudioJuridico from '../../Asset/estudio-juridico-perfil.jpeg'
import projects50 from '../../Asset/50-proyectos-inicio.jpeg'
import clubdeportivo from '../../Asset/club.png'
import pokemon from '../../Asset/pokemon.jpg'
import "./Projects.css";
import { useTheme } from '../../Modules/ThemeContext';
import { useEffect, useState } from 'react';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";

const projects = [
    {
        title: "Estudio Juridico",
        description: "Junto con un equipo nos encargamos de realizar un proyecto para un estudio juridico, él cuál consistía una página web donde se puede visualizar la información de los profesionales y de los servicios que ofrece.",
        tegnology: "Typescript · NextJs · TailwindCSS · NodeJs · Mongoose · MongoDB · Figma · Git",
        image: estudioJuridico
    },
    {
        title: "50 Proyectos 50 Dias",
        description: "Realice un reto que consistía en hacer 1 proyecto por día hasta completar los 50 proyectos. Los proyectos eran enfocados en realizar implementaciones que normalmente se hacen con librerías externas.",
        tegnology: "Perseverancia · Desarrollo personal · React.js · Git",
        image: projects50
    },
    {
        title: "Club Deportivo",
        description: "Aplicación web para la gestión de un club deportivo. Una herramienta pensada y diseñada para que una institución deportiva realice su gestión administrativa y que el usuario puedan conocer al club.",
        tegnology: "JavaScript - React - Redux - NodeJs - Sequelize - Bootstrap - Cloudinary - Auth0 - Git",
        image: clubdeportivo
    },
    {
        title: "Pokemon App",
        description: "Proyecto enfocado en Pokemon, donde se puede ver con la información de cada uno, adémas se puede ordernar(alfabeticamente y por fuerza), filtrar (tipo y creación) y buscar por nombre, y crear más pokemon.",
        tegnology: "JavaScript - React - Redux- NodeJs - Sequelize - APi - Git",
        image: pokemon
    }
]

export default function Projects() {
    const { dark } = useTheme();
    const [currentIndex, setCurrentIndex] = useState(0);
    console.log(projects.length, currentIndex)

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    };

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
    };

    useEffect(() => {
        const interval = setInterval(goToNext, 10000);
        return () => clearInterval(interval);
      }, [currentIndex]);

    return (
        <div className={`content-projects ${dark ? 'dark-projects' : 'light-projects'}`}>
            <div className='projects'>
                <img src={projects[currentIndex].image} alt="img not found" className='projects-img'/>
                <div className='projects-card'>
                    <h1 className='projects-title'>{projects[currentIndex].title}</h1>
                    <h2 className='projects-tegnology'>{projects[currentIndex].tegnology}</h2>
                    <p className='projects-description'>{projects[currentIndex].description}</p>
                </div>
                <div className='btn-projects'>
                    <button onClick={goToPrevious}><BsFillArrowLeftCircleFill className='projects-icons'/></button>
                    <button onClick={goToNext}><BsFillArrowRightCircleFill className='projects-icons'/></button>
                </div>
            </div>
        </div>
    )
}