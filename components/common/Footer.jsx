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
            <div className={styles.topContainer}>
                <div>
                    <Link href={''}>About</Link>
                    <Link href={''}>Certificates</Link>
                    <Link href={''}>Contact</Link>
                </div>
                <div>
                    <Image src={logo} alt='img' />
                </div>
            </div>
            <div className={styles.bottomContainer} >
                <div>+918309620108</div>
                <div>sipxofficial@gmail.com</div>
                <div><Insta width={35} /> <Wts width={24} /></div>
            </div>
        </div>
    )
}

export default Footer;