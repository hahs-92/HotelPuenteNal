//STYLES
import styles from '../styles/Contact.module.css'

export const Contact = () => {
    return(
        <article className={ styles.Contact }>
            <form className={ styles.Form }>
                <label htmlFor="name">Nombre</label>
                <input type="text" id='name' placeholder='Ingrese nombre completo'/>

                <label htmlFor="email">Correo Electronico</label>
                <input type="email" id='email' placeholder='ejemplo@email.com'/>

                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" cols="30" rows="10" placeholder='Mensage'></textarea>

                <input type="submit" value='Enviar'/>

            </form>
        </article>
    )
}