//COMPONENTS
import { Header } from './Header'
import { Footer } from './Footer'

//STYLES
import '../styles/Global.css'
import styles from '../styles/components/Layout.module.css'

export const Layout = ({ children }) => {
    return(
        <section className={ styles.Main }>
            <Header />
            { children }
            <Footer />
        </section>
    )
}