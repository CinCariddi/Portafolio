import { DetailProject } from "./DetailProject";
import './DetailProject.css'
import inicio from '../../Asset/50Project50days/50-proyectos-inicio.jpeg'
import contraseña from '../../Asset/50Project50days/50-proyectos-contraseña.jpeg'
import reloj from '../../Asset/50Project50days/50-proyectos-reloj.jpeg'
import telefono from '../../Asset/50Project50days/50-proyectos-TELEFONO.jpeg'

export default function ProyectosEn50Dias() {
    return (
        <DetailProject title={"50 Proyectos 50 dias"} link={"https://50proyectos-50dias.vercel.app/"}
            content={
                <div className="web-container">
                    <div className='web-img-container'>
                        <div className='web-img'>
                            <img src={inicio} alt="Image not found" className='web-img-top-right'/>
                            <img src={contraseña} alt="Image not found" className='web-img-top-left'/>
                        </div>
                        <div className='web-img'>
                            <img src={reloj} alt="Image not found" className='web-img-bottom-right'/>
                            <img src={telefono} alt="Image not found" className='web-img-bottom-left'/>
                        </div>
                    </div>
                    <div className='web-text-container'>
                        <h2>50 Proyectos 50 días</h2>
                        <span>
                            Acepté un desafío emocionante: completar 50 proyectos en 50 días. Cada día, trabajé en un nuevo proyecto, enfocándome en implementar funcionalidades que normalmente se logran utilizando bibliotecas externas.
                            Los proyectos abarcaban una amplia gama de tareas, desde la creación de diseños que comúnmente requieren bibliotecas hasta el desarrollo de funcionalidades complejas como un buscador de perfiles de GitHub y un generador de contraseñas.
                            Este reto me permitió profundizar en la comprensión de conceptos fundamentales, mejorar mis habilidades de programación y aumentar mi capacidad para resolver problemas sin depender de soluciones preexistentes. Fue una experiencia enriquecedora que me ayudó a fortalecer mis competencias técnicas y mi creatividad en el desarrollo de software.
                        </span>
                    </div>
                </div>
            }
        />
    )
}