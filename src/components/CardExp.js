//STYLES
import styles from '../styles/components/CardExp.module.css'

export const CardExp = ({ src, title, description }) => {
    return(
        <article className={ styles.CardExp }>
            <section className={ styles.Imagen }>
                <img src={  src } alt={  title }/>
            </section>

            <section className= { styles.Description }>
                <h2>{ title }</h2>
                <p>{ description }</p>
            </section>
        </article>
    )
}