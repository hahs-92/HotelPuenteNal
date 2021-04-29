//INFO
import { infoExp } from '../infoExp'

//COMPONNETS
import { CardExp } from './CardExp'

//STYLES
import styles from '../styles/components/ListCardExp.module.css'

export const ListCardExp = () => {
    return(
        <section className={ styles.ListCardExp }>
            <h2>Experiencias</h2>
            {
                infoExp.map(item => (
                    <CardExp 
                    key={ item.id }
                    src={ item.src }
                    title={ item.title }
                    description={ item.description }
                    />
                ))
            }
        </section>
    )
}