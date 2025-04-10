"use client"
import React from 'react'
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import Lottie from 'lottie-react';
import styles from '@/styles/landingpage/HeroSection.module.scss'
import order from '@/public/assets/lottie/order.json'
import Navbar from '../common/Navbar';


const HeroSection = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <Navbar />
                <div className={styles.herosection}>
                    <div className={styles.leftContainer}>
                        <h1 className={styles.h1}>At Sipx, we don’t just sell water</h1>
                        <div>
                            <h2 className={styles.h2} >we <span>deliver</span> </h2>
                            <h2 className={styles.h2} >trust, health, and sustainability</h2>
                            <h2 className={styles.h2} >in every <span>bottle.</span></h2>
                        </div>
                        <div className={styles.orderBtn}
                        >
                            <button className={styles.button}>Order Now</button>
                            <span className={styles.span}><Lottie loop={false} animationData={order} autoplay={false} /></span>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className={herosection.bottomContainer}>
      <div className={herosection.block1}>
        <h3>water is</h3>
        <h3>essential</h3>
      </div>
      <div className="block2"></div>
      <div className="block3"></div>
    </div> */}
        </div>
    )
}

export default HeroSection;