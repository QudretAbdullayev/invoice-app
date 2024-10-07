'use client'
import React from 'react'
import styles from './buttons.module.scss'
import { useLightDarkStore } from '../../../app/store'

const Buttons = () => {
  const lightDarkNew = useLightDarkStore(state => state.lightDark)
  return (
    <section className={`${lightDarkNew ? `${styles.buttons}` : `${styles.buttons} ${styles.buttonsDark}`}`}>
      <div className={styles.container}>
        <button>Edit</button>
        <button>Delete</button>
        <button>Mark as Paid</button>
      </div>
    </section>
  )
}

export default Buttons