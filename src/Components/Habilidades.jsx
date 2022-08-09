import styled from "styled-components"
import '../Style/Habilidades.css'
import js from '../Imagenes/js.png'
import html from '../Imagenes/html.png'
import css from '../Imagenes/css.png'
import reactt from '../Imagenes/react.png'
import redux from '../Imagenes/redux.png'
import nodejs from '../Imagenes/nodejs.png'
import bt from '../Imagenes/bt.png'
// import api from '../Imagenes/api.png'
import git from '../Imagenes/git.png'
import { SkillCard } from "./SkillCard"
import { Container, Row } from "react-bootstrap"
import 'animate.css'

// export default function Habilidades() {
//     return (
//         <Parent>
//             <div className="div1">
//                 <h2>Skills</h2>
//             </div>
//             <div className="div2">
//                 <img src={js} alt='imagen' />
//             </div>
//             <div className="div3">
//                 <img src={html} alt='imagen' width= '100px' height= '100px' />
//             </div>
//             <div className="div4">
//                 <img src={css} alt='imagen' width= '100px' height= '100px'/>
//             </div>
//             <div className="div5">
//                 <img src={reactt} alt='imagen' width= '100px' height= '100px'/>
//             </div>
//             <div className="div6">
//                 <img src={redux} alt='imagen' width= '100px' height= '100px'/>
//             </div>
//             <div className="div7">
//                 <img src={nodejs} alt='imagen' width= '100px' height= '100px'/>
//             </div>
//             <div className="div8">
//                 <img src={bt} alt='imagen' width= '100px' height= '100px'/>
//             </div>
//             <div className="div9">
//                 <img src={api} alt='imagen' width= '100px' height= '100px'/>
//             </div>
//             <div className="div10">
//                 <img src={git} alt='imagen' width= '100px' height= '100px'/>
//             </div>
//         </Parent>
//     )
// }

// const Parent = styled.div`
//     display: grid;
//     grid-template-columns: repeat(3, 1fr);
//     grid-template-rows: repeat(4, 1fr);
//     grid-column-gap: 0px;
//     grid-row-gap: 0px;
//     align-items: center;
//     justify-items: center;
//     margin-left: 2vw;
//     margin-right: 2vw;
// `

export default function Habilidades() {

    const skills = [
        {
            name: '',
            img: js
        },
        {
            name: '',
            img: html
        },
        {
            name: '',
            img: css
        },
        {
            name: '',
            img: reactt
        },
        {
            name: '',
            img: redux
        },
        {
            name: '',
            img: nodejs
        },
        {
            name: '',
            img: bt
        },
        {
            name: '',
            img: git
        },
    ]

    return (
        <Container  className="skill">
            <h2>Skills</h2>
            <Row>
                {
                    skills.map((skill, index) => {
                        return (
                            <SkillCard
                                key={index}
                                {...skill}
                            />
                        )
                    })
                }
            </Row>
        </Container>
    )
}