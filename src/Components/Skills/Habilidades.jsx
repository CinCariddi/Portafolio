import './Habilidades.css'
import js from '../../Imagenes/Skills/js.png'
import html from '../../Imagenes/Skills/html.png'
import css from '../../Imagenes/Skills/css.png'
import reactt from '../../Imagenes/Skills/react.png'
import redux from '../../Imagenes/Skills/redux.png'
import nodejs from '../../Imagenes/Skills/nodejs.png'
import bt from '../../Imagenes/Skills/bt.png'
import git from '../../Imagenes/Skills/git.png'
import { SkillCard } from "./SkillCard"
import { Container, Row } from "react-bootstrap"
import 'animate.css'

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