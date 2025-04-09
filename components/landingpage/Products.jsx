import React from 'react'
import styles from '@/styles/landingpage/Products.module.scss'
import thousand from '@/public/assets/landingpage/thousand.webp'
import five from '@/public/assets/landingpage/five.webp'
import three from '@/public/assets/landingpage/three.webp'
import Image from 'next/image'

const Products = () => {
    return (
        <div className={styles.container} >
            <div className={styles.topContainer}>
                <h2>Our Products</h2>
                <p>At Sipx, we are committed to delivering clean, refreshing, and safe drinking water in every bottle. Our products are designed to meet the highest standards of purity, sustainability, and convenience, ensuring a healthier lifestyle for everyone.</p>
            </div>
            <div className={styles.bottomContainer}>
                <div className={styles.card}>
                    <div className={styles.imgContainer}>
                        <Image src={thousand} alt='img' objectPosition='center' />
                    </div>
                    <h3>1 litre  </h3>
                </div>
                <div className={styles.card}>
                    <div className={styles.imgContainer}>
                        <Image src={five} alt='img' objectPosition='center' />
                    </div>
                    <h3>500ml  </h3>
                </div>
                <div className={styles.card}>
                    <div className={styles.imgContainer}>
                        <Image src={three} alt='img' objectPosition='center' />
                    </div>
                    <h3>300ml  </h3>
                </div>
            </div>
        </div>
    )
}

export default Products;