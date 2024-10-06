import { DetailProject } from "./DetailProject";
import './DetailProject.css'
import landing from '../../Asset/club.png'
import home from '../../Asset/ClubDeportivo/home.jpg'
import actividades from '../../Asset/ClubDeportivo/actividades.jpeg'
import deporte from '../../Asset/ClubDeportivo/futbol.jpeg'
import panel from '../../Asset/ClubDeportivo/panel.jpeg'
import registro from '../../Asset/ClubDeportivo/registro.jpeg'

export default function ClubDeportivo() {
    return (
        <DetailProject title={"Club deportivo"} link={"https://club-henry.vercel.app/"}
            content={
                <div className='web-container'>
                    <div className='web-img-container'>
                        <div className='web-img'>
                            <img src={landing} alt="Image not found" className='web-img-top-right'/>
                            <img src={home} alt="Image not found" className='web-img-top-left'/>
                        </div>
                        <div className='web-img'>
                            <img src={registro} alt="Image not found" className='web-img-bottom-right'/>
                            <img src={panel} alt="Image not found" className='web-img-bottom-left'/>
                        </div>
                        <div className='web-img'>
                            <img src={actividades} alt="Image not found" className='web-img-top-right'/>
                            <img src={deporte} alt="Image not found" className='web-img-top-left'/>
                        </div>
                    </div>
                    <div className='web-text-container'>
                        <h2>
                            Accesos y Perfiles Personalizados
                        </h2>
                        <span>
                            En la pagina principal, encontraras el logo del club y dos botones destacados: uno para registrarte como miembro del club y otro para acceder como invitado.
                        </span>
                        <ul>
                            <li>
                                Invitados: Pueden explorar la pagina con funciones limitadas. Al iniciar sesión como invitado, se accede a la pagina de inicio del club.
                            </li>
                            <li>
                                Socios y Administradores: Tienen acceso a paneles personalizados y perfiles donde pueden gestionar diversas actividades y comunicaciones dentro del club.
                            </li>
                        </ul>
                        <h2>
                            Navegacion Intuitiva
                        </h2>
                        <span>
                            La pagina de inicio cuenta con una barra de navegacion que facilita el acceso a diferentes secciones del sitio:
                        </span>
                        <div className='web-text-list'>
                            <ul>
                                <li>Inicio</li>
                                <li>Actividades</li>
                                <li>Noticias</li>
                            </ul>
                            <ul>
                                <li>Galería</li>
                                <li>Calendario</li>
                                <li>Contacto</li>
                            </ul>
                        </div>
                        <h2>
                            Contenido Dinamico
                        </h2>
                        <span>
                            Bajo la barra de navegación, se presentan tres secciones clave:
                        </span>
                        <ul>
                            <li>
                                Carrusel de Imágenes: Destacando eventos y momentos importantes del club.
                            </li>
                            <li>
                                Actividades: Informacion sobre las actividades y programas disponibles.
                            </li>
                            <li>
                                Ultimas Noticias: Mantente informado sobre las novedades y eventos recientes del club.
                            </li>
                        </ul>
                        <span>
                            Nuestra plataforma esta creada para ofrecer una experiencia enriquecedora y eficiente, asegurando que tanto los usuarios como los administradores puedan interactuar y disfrutar de todas las funcionalidades del club. 
                        </span>
                        <a href="https://www.youtube.com/watch?v=JbprzCdvUo8&t=2s&ab_channel=LucasCencig" target='_blank' className='withoutDefaultClasses links'>
                            Video del proyecto
                        </a>
                    </div>
                </div>
            }
        />
    )
}