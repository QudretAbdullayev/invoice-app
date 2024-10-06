'use client'

import styles from './card.module.scss'
import arrow from '../../../assets/svg/arrow-right.svg'
import Image from 'next/image'
import { useLightDarkStore } from '../../../app/store'
const Card = ({id,name,date,money,paid}) => {
  const lightDarkNew = useLightDarkStore(state => state.lightDark)
  return (
    <div className={`${lightDarkNew ? `${styles.card}` : `${styles.card} ${styles.cardDark}`}`}>
        <div className={styles.cardHeader}>
            <div className={styles.dateID}>
                <h4 className={styles.ID}><p>#</p>{id}</h4>
                <p className={styles.date}>{date}</p>
            </div>
            <h3 className={styles.name}>{name}</h3>
        </div>
        <div className={styles.cardFooter}>
            <h4>£ {money}</h4>
            <button className={`${styles[paid.toLowerCase()]}`}><img src="" alt="" /><p>{paid}</p><div></div></button>
            <Image
            src={arrow}
            alt={'arrow'}
            />
        </div>
    </div>
  )
}

export default Card