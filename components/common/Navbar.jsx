"use client";
import React from 'react'
import Logo from '@/public/sipx-logo.svg'
import WhiteLogo from '@/public/whiteLogo.svg'
import logo from '@/public/sipx-logo.webp'
import Link from 'next/link'
import styles from '@/styles/common/Navbar.module.scss'
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const Navbar = ({text}) => {

    const pathname = usePathname();
    console.log(text);
    

    return (
        <div className={styles.navContainer}>
            <div className={styles.leftContainer}>
                <div>
                    <Link href="/" className={styles.logoContainer} >
                        {
                            text === 'about' ? <Image src={logo} alt='logo' className={styles.logoImg} /> : <Logo width={150} />
                        }
                    </Link>
                </div>
            </div>
            <div className={text === 'about' ? `${styles.rightContainer} ${styles.colorWhite}` : `${styles.rightContainer}`}>
                <Link href="/about" className={pathname === "/about" ? styles.active : ""}>
                    About
                </Link>
                <Link href="/contact" className={pathname === "/contact" ? styles.active : ""}>
                    Contact
                </Link>
                <Link href="/certificates" className={pathname === "/certificates" ? styles.active : ""}>
                    Certificates
                </Link>
            </div>
        </div>
    )
}

export default Navbar