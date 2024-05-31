import './Proyects.css'
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { ProjectCard } from "./ProjectCard";
import projImg1 from '../../Imagenes/estudio-juridico-perfil.jpeg'
import projImg2 from '../../Imagenes/50-proyectos-inicio.jpeg'
import projImg3 from '../../Imagenes/club.png'
import projImg4 from '../../Imagenes/pokemon.jpg'

export default function Project () {

  const projects = [
    {
      title: "Estudio Juridico",
      subtitle: 'Typescript · NextJs · TailwindCSS · NodeJs · Mongoose · MongoDB · Figma · Git',
      description: "Junto con un equipo nos encargamos de realizar un proyecto para un estudio juridico, él cuál consistía una página web donde se puede visualizar la información de los profesionales y de los servicios que ofrece. Además cuenta con la opción para registrar como cliente, administrador o abogado, en cada rol de usuario se pueden realizar diferentes gestiones.",
      imgUrl: projImg1,
    },
    {
      title: "50 Proyectos 50 Dias",
      subtitle: 'Perseverancia · Desarrollo personal · React.js · Git',
      description: "Realice un reto que consistía en hacer 1 proyecto por día hasta completar los 50 proyectos. Los proyectos eran enfocados en realizar implementaciones que normalmente se hacen con librerías externas.",
      imgUrl: projImg2,
    },
    {
      title: "Club Deportivo",
      subtitle: 'JavaScript - React - Redux - NodeJs - Sequelize - Bootstrap - Cloudinary - Auth0 - Git',
      description: "Aplicación web para la gestión de un club deportivo. Una herramienta pensada y diseñada para que una institución deportiva realice su gestión administrativa y que el usuario puedan conocer al club.",
      imgUrl: projImg3,
    },
    {
      title: "Poke App",
      subtitle: 'JavaScript - React - Redux- NodeJs - Sequelize - APi - Git',
      description: "Proyecto enfocado en Pokemon, donde se puede ver con la información de cada uno, adémas se puede ordernar(alfabeticamente y por fuerza), filtrar (tipo y creación) y buscar por nombre, y crear más pokemon.",
      imgUrl: projImg4,
    },
  ];

  return (
    <div className='project-container'>
      <h2>Proyectos</h2>
      <TrackVisibility>
        {({ isVisible }) =>
          <div className={ isVisible ? "animate__animated animate__slideInUp project-view" : "project-view"}>
            {
              projects.map((project, index) => {
                return (
                  <ProjectCard
                    {...project}
                    key={index}
                  />
                )
              })
            }
          </div>
        }
      </TrackVisibility>
    </div>
  )
}