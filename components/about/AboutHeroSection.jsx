import React from 'react'
import styles from '@/styles/about/AboutHeroSection.module.scss'
import FadeInWhenVisible from '../animations/FadeInWhenVisible';
import Navbar from '../common/Navbar';

const AboutHeroSection = () => {
    return (
        <div className={styles.AboutContainer}>
            <Navbar text={'about'}/>
            <div className={styles.div}>
                <FadeInWhenVisible>
                    <h1>We believe</h1>
                </FadeInWhenVisible>
                <FadeInWhenVisible delay={0.25}>
                    <h1>Every drop can change a life.</h1>
                </FadeInWhenVisible>
            </div>
            <div className={`${styles.subhead} ${styles.div}`}>
                <h2></h2>
            </div>
        </div>
    )
}

export default AboutHeroSection;