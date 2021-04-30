import { useState } from 'react'

//STYLES
import styles from '../styles/Contact.module.css'

export const Contact = () => {
    const [ active, setActive ] = useState(false)

    const handleClick = () => {
        setActive(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setActive(true)
        document.getElementById('form').reset()
    }

    return(
        <article className={ styles.Contact }>
            <form className={ styles.Form } id='form'>
                <label htmlFor="name">Nombre</label>
                <input type="text" id='name' placeholder='Escribe nombre completo' required/>

                <label htmlFor="email">Correo Electronico</label>
                <input type="email" id='email' placeholder='ejemplo@email.com' required/>

                <label htmlFor="message">Mensaje</label>
                <textarea name="message" id="message" cols="30" rows="10" placeholder='Mensaje..' required></textarea>

                <input onClick={ handleSubmit } type="submit" value='Enviar'/>

            </form>

            <div className={ active ? styles.AddActive : styles.Add }>
                <div className={ styles.Wrapper }>
                    <h2>Mensaje enviado¡¡</h2>
                    <button onClick={ handleClick } type='button'>X</button>
                </div>
            </div> 
        </article>
    )
}