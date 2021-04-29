//DEPENDENCIAS
import {Link } from 'react-router-dom'

//STYLES
import styles from '../styles/components/Header.module.css'

//COMPONENTS
import Logo from './Logo'

export const Header = () => {
    return(
        <header className={ styles.Header }>
            <div className={ styles.Logo}>
                <Logo height='64px' widht='64' fill='#E6F8F2'/>
            </div>
            <nav className={ styles.Nav }>
                <ul className={ styles.NavWrapper }>
                    <li>
                        <Link to='/'>Inicio</Link>
                    </li>
                    <li>
                        <Link to='/Rooms'>Habitaciones</Link>
                    </li>
                    <li>
                        <Link to='/Contact'>Contacto</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}