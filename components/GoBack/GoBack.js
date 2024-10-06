'use client'
import React from 'react'
import styles from './goBack.module.scss'
import arrowLeft from '../../assets/svg/arrow-left.svg'
import Image from 'next/image'
import { useLightDarkStore } from '../../app/store'
const GoBack = () => {
  const lightDarkNew = useLightDarkStore(state => state.lightDark)
  return (
    <section className={`${lightDarkNew ? `${styles.goBack}` : `${styles.goBack} ${styles.goBackDark}`}`}>
        <div className={styles.container}>
            <Image
            src={arrowLeft}
            alt={"arrow"}
            />
            Go back
        </div>
    </section>
  )
}

export default GoBack