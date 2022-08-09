import '../Style/Proyects.css'
// import Carousel from 'react-bootstrap/Carousel';
// import imagen1 from '../Imagenes/club.png'
// import imagen2 from '../Imagenes/pokemon.jpg'
// import imagen3 from '../Imagenes/perro.jpg'

// export default function Proyects() {
//   // const [isShown, setIsShown] = useState(false)

  
//   const mostrarInfo = () =>{
//     document.getElementById('info').style.display = 'block';
//     document.getElementById('info2').style.display = 'block';
//     document.getElementById('info3').style.display = 'block';
//   }
  
//   const ocultarInfo = () =>{
//     document.getElementById('info').style.display = 'none';
//     document.getElementById('info2').style.display = 'none';
//     document.getElementById('info3').style.display = 'none';
//   }

//   return (
//     <Carousel className='home'>
//       <Carousel.Item interval={1000} onMouseOver={mostrarInfo} onMouseOut={ocultarInfo}>
//         <a href='https://club-henry.vercel.app/' target='_blank'>
//           <img
//             className="d-block  imagenFondo"
//             src={imagen1}
//             alt="First slide"
//             // onMouseEnter={() =>setIsShown(true)}
//             // onMouseLeave={() => setIsShown(false)}
//             // onMouseOver={mostrarInfo}
//             // onMouseOut={ocultarInfo}
//           />
//         </a>
//         <Carousel.Caption>
//           <div className='info2' id='info'>
//             <h3>Club Deportivo</h3>
//             <h6>JavaScript - React - Redux - NodeJs - Sequelize - Bootstrap - Cloudinary - Auth0 - FullCallendar - Git</h6>
//             <p>Aplicación web para la gestión de un club deportivo. Una herramienta pensada y diseñada para que una institución deportiva realice su gestión administrativa y a su vez usuario puedan conocer y asociarse al club. </p>
//           </div>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item interval={500} onMouseOver={mostrarInfo} onMouseOut={ocultarInfo}>
//         <img
//           className="d-block imagenFondo"
//           src={imagen2}
//           alt="Second slide"
//           // onMouseOver={mostrarInfo}
//           // onMouseOut={ocultarInfo}
//         />
//         <Carousel.Caption>
//             <div className='info2' id='info2'>
//               <h3>Poke App</h3>
//               <h6>JavaScript - React - Redux- NodeJs - Sequelize - APi - Git</h6>
//               <p>Proyecto enfocado en Pokemon, donde se puede ver con la información de cada uno, adémas se puede ordernar(alfabeticamente y por fuerza), filtrar (tipo y creación) y buscar por nombre, y crear más pokemon.</p>
//             </div>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item onMouseOver={mostrarInfo} onMouseOut={ocultarInfo}>
//         <img
//           className="d-block imagenFondo"
//           src={imagen3}
//           alt="Third slide"
//           // onMouseOver={mostrarInfo}
//           // onMouseOut={ocultarInfo}
//         />
//         <Carousel.Caption>
//           <div className='info2' id='info3'>
//             <h3>Perros App</h3>
//             <h6>JavaScript - React - Redux- NodeJs - Sequelize - APi - Git</h6>
//             <p>Aplicación donde se encontraba diferente tipos de perros con sus respectivas caracteristicas y razas. En la cual se puede tanto crear un nuevo tipo de perro, como filtrar, ordenar y buscar los ya existentes.</p>
//           </div>
//       </Carousel.Caption> 
//     </Carousel.Item>
//     </Carousel>
//   );
// }


import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from '../Imagenes/club.png'
import projImg2 from '../Imagenes/pokemon.jpg'
import projImg3 from '../Imagenes/perro.jpg'
// import colorSharp2 from "../Imagenes/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import '../Style/DetailProject.css'

export default function Project () {

  const projects = [
    {
      title: "Club Deportivo",
      subtitle: 'JavaScript - React - Redux - NodeJs - Sequelize - Bootstrap - Cloudinary - Auth0 - FullCallendar - Git',
      description: "Aplicación web para la gestión de un club deportivo. Una herramienta pensada y diseñada para que una institución deportiva realice su gestión administrativa y a su vez usuario puedan conocer y asociarse al club.",
      imgUrl: projImg1,
    },
    {
      title: "Poke App",
      subtitle: 'JavaScript - React - Redux- NodeJs - Sequelize - APi - Git',
      description: "Proyecto enfocado en Pokemon, donde se puede ver con la información de cada uno, adémas se puede ordernar(alfabeticamente y por fuerza), filtrar (tipo y creación) y buscar por nombre, y crear más pokemon.",
      imgUrl: projImg2,
    },
    {
      title: "Dog App",
      subtitle: 'JavaScript - React - Redux- NodeJs - Sequelize - APi - Git',
      description: "Aplicación donde se encontraba diferente tipos de perros con sus respectivas caracteristicas y razas. En la cual se puede tanto crear un nuevo tipo de perro, como filtrar, ordenar y buscar los ya existentes.",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn animate__repeat-1": ""}>
                <h2>Proyectos</h2>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      {/* <img className="background-image-right" src={colorSharp2}></img> */}
    </section>
  )
}