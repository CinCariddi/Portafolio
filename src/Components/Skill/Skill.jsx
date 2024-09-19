import './Skill.css'
import { useTheme } from '../../Modules/ThemeContext';
import { MdJavascript, MdHtml, MdOutlineCss } from "react-icons/md";
import { FaReact, FaNode, FaBootstrap, FaGit, FaFigma, FaTrello } from "react-icons/fa";
import { SiRedux, SiTypescript, SiMongodb, SiTailwindcss, SiNotion } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { DiPostgresql } from "react-icons/di";

const skills = [
    {
        name: 'HTML',
        img: <MdHtml className='imgSkill'/>
    },
    {
        name: 'CSS',
        img: <MdOutlineCss className='imgSkill'/>
    },
    {
        name: 'JavaScript',
        img: <MdJavascript className='imgSkill'/>
    },
    {
        name: 'NodeJs',
        img: <FaNode className='imgSkill'/>
    },
    {
        name: 'TypeScript',
        img: <SiTypescript className='imgSkill'/>
    },
    {
        name: 'ReactJs',
        img: <FaReact className='imgSkill'/>
    },
    {
        name: 'NextJs',
        img: <RiNextjsFill className='imgSkill'/>
    },
    {
        name: 'Redux',
        img: <SiRedux className='imgSkill'/>
    },
    {
        name: 'Tailwind',
        img: <SiTailwindcss className='imgSkill'/>
    },
    {
        name: 'Bootstrap',
        img: <FaBootstrap className='imgSkill'/>
    },
    {
        name: 'MongoDb',
        img: <SiMongodb className='imgSkill'/>
    },
    {
        name: 'PostgresSQL',
        img: <DiPostgresql className='imgSkill'/>
    },
    {
        name: 'Figma',
        img: <FaFigma className='imgSkill'/>
    },
    {
        name: 'Git',
        img: <FaGit className='imgSkill'/>
    },
    {
        name: 'Trello',
        img: <FaTrello className='imgSkill'/>
    },
    {
        name: 'Notion',
        img: <SiNotion className='imgSkill'/>
    },
]

export default function Skill() {
    const { dark } = useTheme(); 
    return (
        <div className={`content-skills ${dark ? 'dark-skill' : 'light-skill'}`}>
            {
                skills.map((skill) => {
                    return (
                        <div title={skill.name} className='skill'>
                            {skill.img}
                        </div>
                    )
                })
            }
        </div>
    )
}