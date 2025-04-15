import Image from 'next/image';
import React from 'react'
import styles from '@/styles/lab/HeroSection.module.scss'
import plant from '@/public/assets/lab/plant.png'
import generatedPlant from '@/public/assets/lab/generatedPlant.webp'
import Navbar from '../common/Navbar';


const HeroSection = () => {
    return (
        <div className={styles.container}>
            <Navbar />
            <div className={styles.infoContainer}>
                <div className="title">
                    <h1>COMPLETE WATER PLANT & MACHINARY SOLOUTION</h1>
                </div>
                <div className={styles.imgsContainer}>
                    <div className="img">
                        <Image src={plant} alt='plant' className={styles.firstImg} />
                    </div>
                    <div className="img">
                        <Image src={generatedPlant} alt='plant' className={styles.secImg} />
                    </div>
                </div>
                <div>
                    <p> Highly specialized capability in architecting and designing cutting edge solution for installing and commissioning turnkey projects and  ecosystems. Incorporating modern approaches of water plant setup, Transformation, Storage, Warehouse modelling etc</p>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;