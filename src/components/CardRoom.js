//COMPONETES
import IconWifi from './IconWifi'
import IconCoctel from './IconCoctel'
import IconParking from './IconParking'
import IconTv from './IconTv'

//STYLES
import styles from '../styles/components/CardRoom.module.css'


export const CardRoom = ({ src,title, price, wifi, bar, parking, tv }) => {
    return(
        <article className={ styles.CardRoom }>
            <section className={ styles.Imagen }>
                <img src={ src } alt={ title }/>
            </section>

            <section className={ styles.Description}>
                <div className={ styles.Info }>
                    <h2>{ title }</h2>
                    <h3>{ price }</h3>
                </div>

                <div className={ styles.Icons }>
                    {
                        wifi && <IconWifi width='24' height='24' />
                    }
                    {
                        bar &&  <IconCoctel width='24' height='24' />
                    }
                    {
                        parking && <IconParking width='24' height='24' />
                    }
                    {
                        tv && <IconTv width='24' height='24' />
                    }

                </div>
            </section>

        </article>
    )
}