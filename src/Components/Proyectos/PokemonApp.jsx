import { Button, Contenedor, Contenido, ContenidoInterno } from "../Style";
import Carousel from 'react-bootstrap/Carousel';
import landing from '../../Imagenes/pokemon.jpg'
import home from '../../Imagenes/PokemonApp/home.jpg'
import espera from '../../Imagenes/PokemonApp/espera.jpg'
import detalle from '../../Imagenes/PokemonApp/detalle.jpg'
import creacion from '../../Imagenes/PokemonApp/creacion.jpg'
import './Proyects.css'

const TextToTheRight = () => {
    return (
        <div className="contenido">
            <div className="home2">
                <ContenidoInterno>
                    <div className="in-flex">
                        <h1>
                            Pagina de carga
                        </h1>
                    </div>
                    <div className="in-flex">
                        <p>
                            En la pagina inicial nos encontramos con una imagen de fondo y un boton para ingresar a la pagina.
                        </p>
                    </div>
                </ContenidoInterno>
            </div>
            <div>
                <img src={landing} alt='This is an image' className="imgProyecto2"/>
            </div>
        </div>
    )
}

const TextToTheLeft = () =>{
    return (
        <div className="contenido">
            <div>
                <img src={home} alt='This is an image' className="imgProyecto2 img2"/>
            </div>
            <div className="home2">
                <ContenidoInterno>
                    <div className="in-flex">
                        <h1>
                            Pagina inicial
                        </h1>
                    </div>
                    <div className="in-flex">
                        <p>
                            Al iniciar sesion como invitado, se ingresa al home del club, que cuenta con barra de navegacion con diferentes componentes, los cuales son: Inicio, Actividades, Noticias, Galeria, Calendario y Contacto.
                        </p>
                    </div>
                    <div className="in-flex">
                        <p>
                            Abajo de la barra de navegacion se encuentran tres secciones: un carusel de imagenes, las actividades y las ultimas noticias del club.
                        </p>
                    </div>
                    <div className="in-flex">
                        <p>
                            Para concluir, al final de la pagina se encuentra el footer.
                        </p>
                    </div>
                </ContenidoInterno>
            </div>
        </div>
    )
}


export default function PokemonApp() {
    return (
        <Contenedor>
            <h2>App Pokemon</h2>
            <div>
                <TextToTheRight />
            </div>
                <TextToTheLeft />
            <div className="carusel">
                <Carousel>
                        <Carousel.Item interval={1000}>
                            <img
                                className="d-block carusel"
                                src={detalle}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h2>Ruta de detalle</h2>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={500}>
                            <img
                            className="d-block carusel"
                            src={creacion}
                            alt="Second slide"
                            />
                            <Carousel.Caption>
                                <h2>Ruta de creacion</h2>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block carusel"
                            src={espera}
                            alt="Third slide"
                            />
                            <Carousel.Caption>
                                <h2>pagina de carga</h2>
                            </Carousel.Caption>
                        </Carousel.Item>
                </Carousel>
            </div>
            <div className='botones'>
                    {/* <Button className="btn">
                        <a href="" target='_blank'>
                        Video del Proyecto
                        </a>
                    </Button> */}
                    <Button className="btn">
                        <a href="https://pi-pokemon-livid.vercel.app/" target='_blank' className='withoutDefaultClasses links'>
                            Proyecto
                        </a>
                    </Button>
                    <Button className="btn">
                        <a href="https://github.com/CinCariddi/PI-Pokemon" target='_blank' className='withoutDefaultClasses links'>
                            Repositorio
                        </a>
                    </Button>
            </div>
        </Contenedor>
    )
}