"use client"
import React from 'react'
import styles from './status.module.scss'
import { useLightDarkStore } from '@/app/store'
const Status = () => {
  const lightDarkNew = useLightDarkStore(state => state.lightDark)
  return (
    <section className={`${lightDarkNew ? `${styles.status}` : `${styles.status} ${styles.statusDark}`}`}>
      <div className={styles.container}>
        <p>Status</p>
        <div className={styles.pending}>
          <span className={styles.circle}></span>
          <p>Pending</p>
          <div></div>
        </div>
      </div>
    </section>
  )
}

export default Status