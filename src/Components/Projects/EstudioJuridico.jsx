import { DetailProject } from "./DetailProject";
import './DetailProject.css'
import perfil from '../../Asset/estudio-juridico-perfil.jpeg'
import preguntas from '../../Asset/EstudioJuridico/estudio-juridico-preguntas.jpeg'
import turnos from '../../Asset/EstudioJuridico/estudio-juridico-turnos.jpeg'

export default function EstudioJuridico() {
    return (
        <DetailProject title={"Estudio Juridico"} link={"https://estudio-juridico-nolis.vercel.app/Inicio"}
            content={
                <div className="web-container">
                    <div className='web-img-container'>
                        <div className='web-img'>
                            <img src={perfil} alt="Image not found" className='web-img-top-right'/>
                            <img src={preguntas} alt="Image not found" className='web-img-top-left'/>
                        </div>
                        <div className='web-img'>
                            <img src={turnos} alt="Image not found" className='web-img-bottom-right'/>
                        </div>
                    </div>
                    <div className='web-text-container'>
                        <h2>Estudio Juridico</h2>
                        <span>
                            Trabajé en equipo en el desarrollo de un proyecto para un estudio jurídico, que consistió en la creación de una página web integral. Este sitio web permite a los usuarios visualizar la información del estudio, conocer a los profesionales y explorar los servicios ofrecidos.
                        </span>
                        <h2>
                            Funcionalidades Principales
                        </h2>
                        <ul>
                            <li>
                                Información del Estudio: Presentación detallada del estudio jurídico, incluyendo su historia, misión y valores.
                            </li>
                            <li>
                                Perfiles de Profesionales: Información sobre los abogados y demás profesionales que forman parte del estudio.
                            </li>
                            <li>
                                Servicios Ofrecidos: Descripción de los servicios legales disponibles.
                            </li>
                        </ul>
                        <h2>
                            Gestión de Usuarios
                        </h2>
                        <span>
                            El sistema permite registrarse en diferentes roles con funcionalidades específicas:
                        </span>
                        <ul>
                            <li>
                                Cliente: Puede solicitar información sobre causas, leer las últimas noticias del estudio y agendar citas con los abogados.
                            </li>
                            <li>
                                Administrador: Gestiona la información del sitio, supervisa las solicitudes de los clientes y coordina las agendas de los abogados.
                            </li>
                            <li>
                                Abogado: Consulta y gestiona sus causas, responde a las solicitudes de los clientes y actualiza su perfil profesional.
                            </li>
                        </ul>
                        <span>
                            Este proyecto facilitó la comunicación entre el estudio jurídico y sus clientes, optimizando la gestión interna y mejorando la experiencia del usuario.
                        </span>
                    </div>
                </div>
            }
        />
    )
}