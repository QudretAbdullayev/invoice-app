'use client'

import React from "react";
import styles from "./header.module.scss";
import pacman from '../../assets/svg/Combined Shape.svg'
import moon from '../../assets/svg/Moon.svg'
import sun from '../../assets/svg/Sun.svg'
import profile from '../../assets/svg/Profile.png'
import Image from 'next/image'

const Header = () => {
  const [lightDark, setLightDark] = React.useState('')
  if (localStorage.getItem("lightDark") === null) {
    localStorage.setItem("lightDark", 'light')
  }
  const onLightDark = (e) => {
    e.preventDefault()
    if(lightDark==='light'){
        setLightDark('dark')
        localStorage.setItem("lightDark", 'dark')
    }else{
        setLightDark('light')
        localStorage.setItem("lightDark", 'light')
    }
  }
  return (
    <header className={styles.header} >
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
            <div className={`${lightDark==='dark' ? `${styles.darkMode}` : `${styles.lightMode}`}`} onClick={(e)=>{onLightDark(e)}}>
                {lightDark==="dark" 
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
    </header>
  )
}

export default Header