//COMPONENTS
import { ListCardExp } from '../components/ListCardExp'

//STYLES
import styles from '../styles/Home.module.css'

//IMAGES
import Portada from '../assests/Portada.webp'


export const Home = () => {
    return( 
        <section className={  styles.Home } >
            <section className={ styles.Cover }>
                <div className={ styles.Imagen }>
                    <img src={ Portada } alt="Imagen parque nacional"/>
                </div>
                <div className={ styles.Title }>
                    <h1>Hotel PuenteNal</h1>
                    <h2>Disfruta de los mejores paisajes y sitios turisticos de la región</h2>
                </div>
            </section>

            <section className={ styles.Exp }>
                {/* <h2>Experiencias</h2> */}
                <ListCardExp />
            </section>

        </section>
    )
}