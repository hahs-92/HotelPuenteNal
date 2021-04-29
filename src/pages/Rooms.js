//COMPONETS
import { ListCardRooms } from '../components/ListCardRooms'

//STYLES
import styles from '../styles/Rooms.module.css'


export const Rooms = () => {
    return(
        <section className={ styles.Rooms }>
            <ListCardRooms />
        </section>
    )
}