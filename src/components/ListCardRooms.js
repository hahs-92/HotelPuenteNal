//COMPONENETS
import { CardRoom } from './CardRoom'

//INFO
import { infoRooms } from '../infoRooms'

//STYLES
import styles from '../styles/components/ListCardRooms.module.css'

export const ListCardRooms = () => {
    return(
        <section className={ styles.ListCardRooms }>
            {
                infoRooms.map( item => (
                    <CardRoom 
                    key= { item.id }
                    src={ item.src }
                    title={ item.title }
                    price={ item.price }
                    wifi={ item.wifi }
                    bar={ item.bar }
                    parking={ item.parking }
                    tv={ item.tv }
                    />
                ))
            }
        </section>
    )
}