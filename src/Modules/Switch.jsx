import './Switch.css'
import moon from '../Asset/Moon.png'
import sun from '../Asset/Sun.png'
import { useTheme } from './ThemeContext';

export const Switch = () => {
    const { dark, toggleTheme } = useTheme();

    return (
        <div className="content-switch">
            {dark === false ? (
                <button className='btn-switch-dark' onClick={toggleTheme}>
                    <img src={moon} alt="Modo oscuro" className='btn-switch-image-dark'/>
                </button>
            ) : (
                <button className='btn-switch-light' onClick={toggleTheme}>
                    <img src={sun} alt="Modo claro" className='btn-switch-image-light'/>
                </button>
            )}
        </div>
    );
};
