import Carousel from 'react-bootstrap/Carousel';
import { Button, Contenedor, Contenido, ContenidoInterno, Div } from "../Style";
import landing from '../../Imagenes/club.png'
import home from '../../Imagenes/ClubDeportivo/home.jpg'
import actividades from '../../Imagenes/ClubDeportivo/actividades.jpeg'
import deporte from '../../Imagenes/ClubDeportivo/futbol.jpeg'
import panel from '../../Imagenes/ClubDeportivo/panel.jpeg'
import registro from '../../Imagenes/ClubDeportivo/registro.jpeg'
import './ClubDeportivo.css'
import { Row } from 'react-bootstrap';


const TextToTheRight = () =>{
    return (
        <Contenido>
            <div>
                <ContenidoInterno>
                    <Row>
                        <div>
                            <h1>
                                Pagina de carga
                            </h1>
                        </div>
                        <div>
                            <p>
                                En la pagina inicial nos encontramos con el Logo del Club, y ademas con dos botones, los cuales uno es para registrarnos al club y otro para ingresar a la pagina como invitado.
                            </p>
                        </div>
                        <div>
                            <p>
                                <i>Cuando se ingresa como invitado, hay muchas funciones que le quedan restringidas.</i>
                            </p>
                        </div>
                    </Row>
                </ContenidoInterno>
            </div>
            <div>
                <img src={landing} alt='This is an image' height='250vh'/>
            </div>
        </Contenido>
    )
}
const TextToTheLeft = () =>{
    return (
        <Contenido>
            <div>
                <img src={home} alt='This is an image' height='250vh'/>
            </div>
            <div>
                <ContenidoInterno>
                    <div className='textoDerecha'>
                        <div>
                            <h1>
                                Pagina inicial
                            </h1>
                        </div>
                        <div className='textoDerecha'>
                            <p>
                                Al iniciar sesion como invitado, se ingresa al home del club, que cuenta con barra de navegacion con diferentes componentes, los cuales son: Inicio, Actividades, Noticias, Galeria, Calendario y Contacto.
                            </p>
                        </div>
                        <div className='textoDerecha'>
                            <p>
                                Abajo de la barra de navegacion se encuentran tres secciones: un carusel de imagenes, las actividades y las ultimas noticias del club.
                            </p>
                        </div>
                        <div>
                            <p>
                                Para concluir, al final de la pagina se encuentra el footer.
                            </p>
                        </div>
                    </div>
                </ContenidoInterno>
            </div>
        </Contenido>
    )
}

export default function ClubDeportivo() {
    return (
        <Contenedor>
            <h2>Club Deportivo</h2>
            <TextToTheRight />
            <TextToTheLeft />
            <Carousel>
                    <Carousel.Item interval={1000}>
                        <img
                            className="d-block carusel"
                            src={actividades}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h2>Seccion de deportes</h2>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                        className="d-block carusel"
                        src={deporte}
                        alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h2>Ruta de deporte</h2>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block carusel"
                        src={panel}
                        alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h2>Panel de Administrador</h2>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block carusel"
                        src={registro}
                        alt="Four slide"
                        />
                        <Carousel.Caption>
                            <h2>Ruta de registro</h2>
                        </Carousel.Caption>
                    </Carousel.Item>
            </Carousel>
            <div className='botones'>
                    <Button>
                        <a href="https://www.youtube.com/watch?v=JbprzCdvUo8&t=2s&ab_channel=LucasCencig" target='_blank' className='withoutDefaultClasses links'>
                            Video del Proyecto
                        </a>
                    </Button>
                    <Button>
                        <a href="https://club-henry.vercel.app/" target='_blank' className='withoutDefaultClasses links'>
                            Proyecto deployado
                        </a>
                    </Button>
                    <Button>
                        <a href='https://github.com/matias183/FrontHenryClub' target='_blank' className='withoutDefaultClasses links'>
                            Repositorio
                        </a>
                    </Button>
            </div>
        </Contenedor>
    )
}