'use client'
import React from 'react'
import styles from './buttons.module.scss'
import { useDeleteStore, useLightDarkStore } from '../../../app/store'

const Buttons = () => {
  const lightDarkNew = useLightDarkStore(state => state.lightDark)
  const {deleteStore, isDelete} = useDeleteStore()
  const handleDelete = (e) => {
    e.preventDefault()
    console.log('hello World')
    isDelete(true)
  }
  return (
    <section className={`${lightDarkNew ? `${styles.buttons}` : `${styles.buttons} ${styles.buttonsDark}`}`}>
      <div className={styles.container}>
        <button>Edit</button>
        <button onClick={(e)=>{handleDelete(e)}}>Delete</button>
        <button>Mark as Paid</button>
      </div>
    </section>
  )
}

export default Buttons