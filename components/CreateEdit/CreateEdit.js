'use client'
import React from 'react'
import styles from './createEdit.module.scss'
import basket from '../../assets/svg/Basket.svg'
import date from '../../assets/svg/date.svg'
import arrow from '../../assets/svg/arrow-bottom.svg'
import Image from 'next/image'
import { useLightDarkStore } from '@/app/store'
const CreateEdit = () => {
  const lightDarkNew = useLightDarkStore(state => state.lightDark)
  const price = 1;
  const count = 1;
  const total = price*count;
  const dateRef = React.useRef(null);
  const handleDateClick = (e) => {
    e.preventDefault()
    if (dateRef.current) {
      console.log('hello')
      dateRef.current.focus();
    }
  };
  const today = new Date().toISOString().substring(0,10);
  return (
    <section className={`${lightDarkNew ? `${styles.createEdit}` : `${styles.createEdit} ${styles.createEditDark}`}`}>
        <form>
          <div className={styles.container}>
            <h2>New Invoice</h2>
            <div className={styles.billFrom}>
              <h6>Bill From</h6>
              <div className={styles.street}>
                <label>Street Address</label>
                <input name={'form-street address'} placeholder={'Street Address'} type="text" />
              </div>
              <span>
                <div className={styles.city}>
                  <label>City</label>
                  <input name={'form-city'} placeholder={'City'} type="text" />
                </div>
                <div className={styles.code}>
                  <label>Post Code</label>
                  <input name={'form-post code'} placeholder={'Post Code'} type="text" />
                </div>
                <div className={styles.country}>
                  <label>Country</label>
                  <input name={'form-country'} placeholder={'Country'} type="text" />
                </div>
              </span>
            </div>
            <div className={styles.billTo}>
              <h6>Bill To</h6>
              <div className={styles.name}>
                <label>Client’s Name</label>
                <input name={'client’s name'} placeholder={'Client’s Name'} type="text" />
              </div>
              <div className={styles.email}>
                <label>Client’s Email</label>
                <input name={'client’s email'} placeholder={'Client’s Email'} type="email" />
              </div>
              <div className={styles.street}>
                <label>Street Address</label>
                <input name={'to-street address'} placeholder={'Street Address'} type="text" />
              </div>
              <span>
                <div className={styles.city}>
                  <label>City</label>
                  <input name={'to-city'} placeholder={'City'} type="text" />
                </div>
                <div className={styles.code}>
                  <label>Post Code</label>
                  <input name={'to-post code'} placeholder={'Post Code'} type="text" />
                </div>
                <div className={styles.country}>
                  <label>Country</label>
                  <input name={'to-country'} placeholder={'Country'} type="text" />
                </div>
              </span>
            </div>
            <div className={styles.descriptionProject}>
              <div className={styles.date}>
                <label>Invoice Date</label>
                <div>
                  <input ref={dateRef} name={'invoice date'} defaultValue={today} type="date" />
                  <div className={styles.dateImage}>
                    <Image
                      onClick={(e)=>{handleDateClick(e)}}
                      src={date}
                      alt={'date'}
                    />
                  </div>
                </div>
              </div>
              <div className={styles.payment}>
                <label>Payment Terms</label>
                <div className={styles.select}>
                  <select name={'payment terms'}>
                    <option value="3">Net 3 Days</option>
                    <option value="7">Net 7 Days</option>
                    <option value="15">Net 15 Days</option>
                    <option value="30">Net 30 Days</option>
                    <option value="60">Net 60 Days</option>
                  </select>
                  <Image
                    src={arrow}
                    alt={'arrow'}
                  />
                </div>
              </div>
              <div className={styles.description}>
                <label>Project / Description</label>
                <input name={'project description'} placeholder={'Project / Description'} type="name" />
              </div>
            </div>
            <div className={styles.itemList}>
              <h4>Item List</h4>
              <div className={styles.item}>
                <div className={styles.itemTitle}>
                  <label>Item Name</label>
                  <input placeholder='Item Name' type="text" name="item-name"/>
                </div>
                <div className={styles.qty}>
                  <label>Qty.</label>
                  <input defaultValue={count} type="number" />
                </div>
                <div className={styles.price}>
                  <label>Price</label>
                  <input placeholder='Price' defaultValue={price.toFixed(2)} type="number" />
                </div>
                <div className={styles.total}>
                  <label>Total</label>
                  <span>{(total).toFixed(2)}</span>
                </div>
                <div className={styles.basket}>
                  <Image
                  src={basket}
                  alt={'basket'}/>
                </div>
                <div className={styles.itemAddButton}></div>
              </div>
            </div>
            <button>+ Add New Item</button>
          </div>
          <div className={styles.containerFooter}>
            <div className={styles.box}>    
            </div>
            <div className={styles.box1}>
              <button className={`${styles.buttonActive}`}>Cancel</button>
              <button>Discard</button>
              <button>Save as Draft</button>
              <button className={`${styles.buttonActive}`}>Save Changes</button>
            </div>
          </div>
        </form>
    </section>
  )
}

export default CreateEdit