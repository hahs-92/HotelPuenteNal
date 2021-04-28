//COMPONENTS
import IconYoutobe from './IconYoutobe'
import IconMessenger from './IconMessenger'
import IconInstagram from './IconInstagram'
import IconWeb from './IconWeb'

//STYLES
import styles from '../styles/components/Footer.module.css'

export const Footer = () => {
    return(
        <footer className={ styles.Footer }>
            <section className={ styles.Info }>
                <h2>Hotel PuenteNal</h2>
                <h3>Dirección: Barrio San Luis calle 11 #2-63</h3>
                <h3>Email: alexandre_2420@outlook.com</h3>
                <h3>Celular: 321 9357540</h3>
            </section>

            <section>
                <IconMessenger width='48px' height='40px' fill='#E6F8F2'/>
                <IconYoutobe width='48px' height='40px' fill='#E6F8F2'/>   
                <IconInstagram width='48px' height='40px' fill='#E6F8F2'/>
                <IconWeb width='48px' height='40px' fill='#E6F8F2'/>
            </section>

            <section >
                <h3>Derechos reservados @ 2020-2077 @HAHS </h3>
            </section>
        </footer>
    )
}