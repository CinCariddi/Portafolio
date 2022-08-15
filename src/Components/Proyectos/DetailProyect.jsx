import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from '../../Imagenes/club.png'
import projImg2 from '../../Imagenes/pokemon.jpg'
import projImg3 from '../../Imagenes/perro.jpg'
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import './DetailProject.css'

export default function DetailProyect () {

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
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
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