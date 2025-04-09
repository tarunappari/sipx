"use client"
import React from 'react'
import herosection from '@/styles/landingpage/HeroSection.module.scss'
import dynamic from "next/dynamic";
import starfish from '@/public/assets/lottie/starfish.json'
import order from '@/public/assets/lottie/order.json'
import Navbar from '../common/Navbar';
import Lottie from 'lottie-react';

const HeroSection = () => {
    return (
        <div className={herosection.container}>
            <div className={herosection.infoContainer}>
                <Navbar />
                <div className={herosection.herosection}>
                    <div className={herosection.leftContainer}>
                        <h1 className={herosection.h1}>At Sipx, we don’t just sell water</h1>
                        <div>
                            <h2 className={herosection.h2} >we <span>deliver</span> </h2>
                            <h2 className={herosection.h2} >trust, health, and sustainability</h2>
                            <h2 className={herosection.h2} >in every <span>bottle.</span></h2>
                        </div>
                        <div className={herosection.orderBtn}
                        >
                            <button className={herosection.button}>Order Now</button>
                            <span className={herosection.span}><Lottie loop={false} animationData={order} autoplay={false} /></span>
                        </div>
                    </div>
                    <div className={herosection.blobb}>
                        {/* <Image src={bubble} alt='nt' width={250}/> */}
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