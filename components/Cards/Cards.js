'use client'

import styles from './cards.module.scss'
import Card from './Card/Card'
import { useLightDarkStore } from '../../app/store'

const Cards = () => {
  const lightDarkNew = useLightDarkStore(state => state.lightDark)
  return (
    <section className={`${lightDarkNew ? `${styles.cards}` : `${styles.cards} ${styles.cardsDark}`}`}>
      <div className={styles.container}>
        <Card id={'RT3080'} name={'Jensen Huang'} date={'Due  19 Aug 2021'} money={'1,800.90'} paid={'Paid'}/>
        <Card id={'XM9141'} name={'Alex Grim'} date={'Due  20 Sep 2021'} money={'556.00'} paid={'Pending'}/>
        <Card id={'FV2353'} name={'Anita Wainwright'} date={'Due  12 Nov 2021'} money={'3,102.04'} paid={'Draft'}/>
      </div>
    </section>
  )
}

export default Cards