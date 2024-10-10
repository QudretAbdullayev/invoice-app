import React from 'react'
import styles from './viewInvoice.module.scss'
import Status from './Status/Status'
import Detail from './Detail/Detail'
import Buttons from './Buttons/Buttons'

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