'use client'
import React from 'react'
import styles from './delete.module.scss'
import { useDeleteStore, useLightDarkStore } from '@/app/store'

const Delete = () => {
  const lightDarkNew = useLightDarkStore(state => state.lightDark)
  const deleteNew = useDeleteStore(state => state.deleteStore)
  console.log(deleteNew, "sssss")
  return (
    <>{deleteNew 
      ?
    <section className={`${lightDarkNew ? `${styles.delete}` : `${styles.delete} ${styles.deleteDark}`}`}>
        <div className={styles.container}>
          <div className={styles.opacityArea}></div>
          <div className={styles.box}>
            <h6>Confirm Deletion</h6>
            <p>Are you sure you want to delete invoice #XM9141? This action cannot be undone.</p>
            <div>
              <button>Cancel</button>
              <button>Delete</button>
            </div>
          </div>
        </div>
    </section>
    :
    <></>
    }
    </>
  )
}

export default Delete