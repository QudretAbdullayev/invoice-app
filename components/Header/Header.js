'use client'

import React from "react";
import styles from "./header.module.scss";
import pacman from '../../assets/svg/Combined Shape.svg'
import moon from '../../assets/svg/Moon.svg'
import sun from '../../assets/svg/Sun.svg'
import profile from '../../assets/svg/Profile.png'
import Image from 'next/image'
import {useLightDarkStore} from '../../app/store'
const Header = () => {
  const lightDarkNew = useLightDarkStore(state => state.lightDark)
  const lightDarkHandle = useLightDarkStore(state => state.isLightDark)
  const onLightDark = (e) => {
    e.preventDefault()
    lightDarkHandle(lightDarkNew)
    if(lightDarkNew){
        localStorage.setItem("lightDark", false)
    }else{
        localStorage.setItem("lightDark", true)
    }
  }
  return (
    <header className={`${lightDarkNew ? `${styles.header}` : `${styles.header} ${styles.headerDark}`}`}>
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Image
                    src={pacman}
                    alt="pacman"
                />
                <div className={styles.logoBackground1}>
                    <div className={styles.logoBackground2}>
                    </div>
                </div>
            </div>
            <div className={styles.profileSettings}>
                <div className={`${lightDarkNew ? `${styles.lightMode}` : `${styles.darkMode}`}`} onClick={(e)=>{onLightDark(e)}}>
                    {lightDarkNew===false 
                    ? 
                    <Image
                        src={moon}
                        alt="moon"
                    />
                    :
                    <Image
                        src={sun}
                        alt="sun"
                    />
                    }
                </div>
                <div className={styles.profileLogo}>
                    <Image
                        src={profile}
                        alt="profile"
                    />
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Header