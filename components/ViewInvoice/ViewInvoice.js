import React from 'react'
import styles from './viewInvoice.module.scss'
import Status from './Status/Status'

const ViewInvoice = () => {
  return (
    <main>
      <Status/>
      <Detail/>
      <Buttons/>
    </main>
  )
}

export default ViewInvoice