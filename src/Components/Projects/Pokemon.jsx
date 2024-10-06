import { DetailProject } from "./DetailProject";
import './DetailProject.css'
import home from '../../Asset/pokemon.jpg'
import espera from '../../Asset/PokemonApp/espera.jpg'
import detalle from '../../Asset/PokemonApp/detalle.jpg'
import creacion from '../../Asset/PokemonApp/creacion.jpg'

export default function Pokemon() {
    return (
        <DetailProject title={"Pokemon App"} link={"https://pi-pokemon-livid.vercel.app/"}
            content={
                <div className="web-container">
                    <div className='web-img-container'>
                        <div className='web-img'>
                            <img src={home} alt="Image not found" className='web-img-top-right'/>
                            <img src={espera} alt="Image not found" className='web-img-top-left'/>
                        </div>
                        <div className='web-img'>
                            <img src={detalle} alt="Image not found" className='web-img-bottom-right'/>
                            <img src={creacion} alt="Image not found" className='web-img-bottom-left'/>
                        </div>
                    </div>
                    <div className='web-text-container'>
                        <h2>Pokemon</h2>
                        <span>
                            En la página inicial, te damos la bienvenida con una imagen de fondo llamativa y un botón destacado para ingresar al sitio.
                        </span>
                        <h2>
                            Funcionalidades de la Página de Inicio
                        </h2>
                        <ul>
                            <li>
                                Filtros de Búsqueda: Encuentra fácilmente los Pokémon que buscas utilizando filtros por tipo y por creador. Además, puedes ordenar la lista alfabéticamente o por nivel de ataque.
                            </li>
                            <li>
                                Listado Completo: Accede al listado completo de todos los Pokémon disponibles.
                            </li>
                            <li>
                                Creación de Pokémon: Un botón intuitivo te permite crear nuevos Pokémon de manera sencilla.
                            </li>
                            <li>
                                Detalles de Pokémon: Al hacer clic en cualquier Pokémon del listado, serás dirigido a una página con información detallada sobre ese Pokémon específico.
                            </li>
                        </ul>
                        <span>
                            Explora, crea y descubre todo sobre tus Pokémon favoritos de manera fácil y rápida.
                        </span>
                    </div>
                </div>
            }
        />
    )
}