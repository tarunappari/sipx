import React from 'react'
import Logo from '@/public/sipx-logo.svg'
import Link from 'next/link'
import styles from '@/styles/common/Navbar.module.scss'

const Navbar = () => {
    return (
        <div className={styles.navContainer}>
            <div className={styles.leftContainer}>
                <div>
                    <Logo width={150} />
                </div>
            </div>
            <div className={styles.rightContainer}>
                <Link href={''}>About</Link>
                <Link href={''}>Contact</Link>
                <Link href={''}>Articles</Link>
            </div>
        </div>
    )
}

export default Navbar