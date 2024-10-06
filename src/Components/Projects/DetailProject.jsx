import "./DetailProject.css"
import { useTheme } from '../../Modules/ThemeContext';
import { FaWindowRestore, FaPlus, FaMinus } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";

export function DetailProject ({title, link, content}){
    const { dark } = useTheme(); 
    return (
        <div className={`project-web-container ${dark ? 'dark-detail-project' : 'light-detail-project'}`}>
            <div className='navigation-bar-container'>
                <div className='window-container'>
                    <div className='window'>
                        <h3>
                            {title}
                        </h3>
                    </div>
                    <div className='window'><FaPlus  className="detail-project-icon"/></div>
                </div>
                <div className='eyelash-container'>
                    <div className='eyelash'><FaMinus  className="detail-project-icon"/></div>
                    <div className='eyelash'><FaWindowRestore  className="detail-project-icon"/></div>
                    <div className='eyelash'><IoCloseSharp  className="detail-project-icon"/></div>
                </div>
            </div>
            <div className='link-container'>
                <a href={link} target='_blank' className='withoutDefaultClasses'>
                    {link}
                </a>
            </div>
            {content}
        </div>
    )
}