import styles from './nothing.module.scss'
import email from '../../assets/svg/Email campaign_Flatline 2.svg'
import Image from 'next/image'
const Nothing = () => {
  return (
    <section className={`${styles.nothing} ${styles.nothingDark}`}>
        <Image
        src={email}
        alt={email}
        />
        <h4 className={styles.title}>
            There is nothing here
        </h4>
        <p className={styles.description}>
            Create an invoice by clicking the <br/>New button and get started
        </p>
    </section>
  )
}

export default Nothing