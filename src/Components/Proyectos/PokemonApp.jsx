import { Button, Contenedor, Contenido, ContenidoInterno } from "../Style";
import Carousel from 'react-bootstrap/Carousel';

const TextToTheRight = () => {
    return (
        <Contenido>
            <div>
                <ContenidoInterno>
                    <div>
                        <h1>
                            Pagina de carga
                        </h1>
                    </div>
                    <div>
                        <p>
                            En la pagina inicial nos encontramos con una imagen de fondo y un boton para ingresar.
                        </p>
                    </div>
                </ContenidoInterno>
            </div>
            <div>
                <img src='' alt='This is an image' height='250vh'/>
            </div>
        </Contenido>
    )
}

const TextToTheLeft = () =>{
    return (
        <Contenido>
            <div>
                <img src='' alt='This is an image' height='250vh'/>
            </div>
            <div>
                <ContenidoInterno>
                    <div>
                        <h1>
                            Pagina inicial
                        </h1>
                    </div>
                    <div>
                        <p>
                            Al iniciar sesion como invitado, se ingresa al home del club, que cuenta con barra de navegacion con diferentes componentes, los cuales son: Inicio, Actividades, Noticias, Galeria, Calendario y Contacto.
                        </p>
                    </div>
                    <div>
                        <p>
                            Abajo de la barra de navegacion se encuentran tres secciones: un carusel de imagenes, las actividades y las ultimas noticias del club.
                        </p>
                    </div>
                    <div>
                        <p>
                            Para concluir, al final de la pagina se encuentra el footer.
                        </p>
                    </div>
                </ContenidoInterno>
            </div>
        </Contenido>
    )
}


export default function PokemonApp() {
    return (
        <Contenedor>
            <h2>App Pokemon</h2>
            <TextToTheRight />
            <TextToTheLeft />
            <Carousel>
                    <Carousel.Item interval={1000}>
                        <img
                            className="d-block carusel"
                            src=''
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h2>Seccion de deportes</h2>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                        className="d-block carusel"
                        src=''
                        alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h2>Ruta de deporte</h2>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block carusel"
                        src=''
                        alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h2>Panel de Administrador</h2>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block carusel"
                        src=''
                        alt="Four slide"
                        />
                        <Carousel.Caption>
                            <h2>Ruta de registro</h2>
                        </Carousel.Caption>
                    </Carousel.Item>
            </Carousel>
            <div className='botones'>
                    <Button className="btn">
                        <a href="" target='_blank'>
                        Video del Proyecto
                        </a>
                    </Button>
                    <Button className="btn">
                        <a href="" target='_blank'>
                            Proyecto deployado
                        </a>
                    </Button>
                    <Button className="btn">
                        <a href="" target='_blank'>
                            Repositorio
                        </a>
                    </Button>
            </div>
        </Contenedor>
    )
}