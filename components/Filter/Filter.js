'use client'
import styles from './filter.module.scss';
import Image from 'next/image'
import arrowBottom from '../../assets/svg/arrow-bottom.svg'
import { useLightDarkStore } from '../../app/store';

const Filter = () => {
  const lightDarkNew = useLightDarkStore(state => state.lightDark)
  return (
    <section className={`${lightDarkNew ? `${styles.filter}` : `${styles.filter} ${styles.filterDark}`}`}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h4>Invoices</h4>
          <span><h6>There are </h6> <h6> 7 invoices</h6></span>
        </div>
        <div className={styles.buttons}>
          <div className={styles.filterButton}>
            <span>
              <p>Filter</p>
              <p>by status</p>
            </span>
            <Image
              src={arrowBottom}
              alt="arrow"
            />
          </div>
          <div className={styles.newButton}><div>+</div><span><p>New</p><p>Invoice</p></span></div>
        </div>
      </div>
    </section>
  )
}

export default Filter