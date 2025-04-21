'use client'
import React from 'react'
import styles from '@/styles/common/Footer.module.scss'
import Image from 'next/image';
import logo from '@/public/sipx-logo.webp'
import Link from 'next/link';
import Insta from '@/public/assets/svg/insta.svg'
import Wts from '@/public/assets/svg/wts.svg'

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.phoneLogo}>
                <Image src={logo} alt='img' />
            </div>
            <div className={styles.topContainer}>
                <div>
                    <Link href={'/about'}>About</Link>
                    <Link href={'/reports'}>Reports</Link>
                    <Link href={''}>Contact</Link>
                </div>
                <div className={styles.logo}>
                    <Image src={logo} alt='img' />
                </div>
                <div >
                    <div>+918309620108</div>
                    <div>sipxofficial@gmail.com</div>
                    <div><Insta width={35} onClick={() => window.open('https://www.instagram.com/drink_sipx/', '_blank')} /> <Wts width={24} onClick={() =>
                        window.open(
                            'https://wa.me/917095427959?text=Hi%2C%20I%20saw%20your%20website%20and%20wanted%20to%20connect!',
                            '_blank'
                        )} /></div>
                </div>
            </div>
            <div className={styles.bottomContainer}>
                © 2025 All Rights Reserved | SIPX
            </div>
        </div>
    )
}

export default Footer;