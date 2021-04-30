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
                <a href="https://www.facebook.com/" target='_blank' title='Messenger' rel='noreferrer'>
                    <IconMessenger width='48px' height='40px' fill='#E6F8F2'/>
                </a>
                <a href="https://www.youtube.com/channel/UCdU_Ll5tWJwidB9J_BmL4pw" target='_blank' title='Youtube' rel='noreferrer'>
                    <IconYoutobe width='48px' height='40px' fill='#E6F8F2'/>   
                </a>
                <a href="https://www.instagram.com/?hl=es-la" target='_blank' title='Instagram' rel='noreferrer'>
                    <IconInstagram width='48px' height='40px' fill='#E6F8F2'/>
                </a>
                <a href="https://hahsportfolio.web.app/" target='_blank' title='Web' rel='noreferrer'>
                    <IconWeb width='48px' height='40px' fill='#E6F8F2'/>
                </a>
            </section>

            <section >
                <h3>Derechos reservados @ 2020-2077 @HAHS </h3>
            </section>
        </footer>
    )
}