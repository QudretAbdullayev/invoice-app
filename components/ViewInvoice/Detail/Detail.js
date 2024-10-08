'use client'
import React from 'react'
import styles from './detail.module.scss'
import { useLightDarkStore } from '../../../app/store'
const Detail = () => {
  const lightDarkNew = useLightDarkStore(state => state.lightDark)
  return (
    <section className={`${lightDarkNew ? `${styles.detail}` : `${styles.detail} ${styles.detailDark}`}`}>
      <div className={styles.container}>
        <div className={styles.description}>
          <div className={styles.title}>
            <span className={styles.ID}><p>#</p>XM9141</span>
            <p  className={styles.position}>Graphic Design</p>
          </div>
          <div className={styles.firstAdress}>
            <p>19 Union Terrace</p>
            <p>London</p>
            <p>E1 3EZ</p>
            <p>United Kingdom</p>
          </div>
        </div>
        <div className={styles.detailArea}>
          <div className={styles.date}>
            <div className={styles.invoice}>
              <p>Invoice date</p>
              <h6>21 Aug 2021</h6>
            </div>
            <div className={styles.payment}>
              <p>Payment Due</p>
              <h6>20 Sep 2021</h6>
            </div>
          </div>
          <div className={styles.billTo}>
            <p>Bill to</p>
            <h6>Alex Grim</h6>
            <p>84 Church Way</p>
            <p>Bradford</p>
            <p>BD1 9PB</p>
            <p>United Kingdom</p>
          </div>
          <div className={styles.sentTo}>
            <p>Sent to</p>
            <h6>alexgrim@mail.com</h6>
          </div>
        </div>
        <div className={styles.pay}>
          <div className={styles.items}>
            <div className={styles.itemTitle}>
              <p>Item Name</p>
              <p>QTY.</p>
              <p>Price</p>
              <p>Total</p>
            </div>
            <div className={styles.item}>
              <div className={styles.service}>
                <h6 className={styles.serviceName}>Banner Design</h6>
                <div className={styles.serviceAmount}>
                  <p>1</p>
                  <p> x </p>
                  <p>£ 156.00</p>
                </div>
              </div>
              <h6 className={styles.price}>£ 156.00</h6>
            </div>
            <div className={styles.item}>
              <div className={styles.service}>
                <h6 className={styles.serviceName}>Email Design</h6>
                <div className={styles.serviceAmount}>
                  <p>1</p>
                  <p> x </p>
                  <p>£ 200.00</p>
                </div>
              </div>
              <h6 className={styles.price}>£ 400.00</h6>
            </div>
          </div>
          <div className={styles.total}>
            <p className={styles.title}>Amount Due</p>
            <h6 className={styles.totalPrice}>£ 556.00</h6>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Detail