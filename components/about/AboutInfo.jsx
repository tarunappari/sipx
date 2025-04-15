import React from 'react'
import styles from '@/styles/about/AboutInfo.module.scss'
import leavesImg from '@/public/assets/about/leaves.webp'
import shadowImg from '@/public/assets/about/shadow.webp'
import Image from 'next/image'
import FadeInWhenVisible from '../animations/FadeInWhenVisible'


const AboutInfo = () => {
    return (
        <div className={styles.AboutInfoContainer}>
            <div className={styles.info}>
                <p>At SipX, our mission is simple yet powerful — to bring hope, hydration, and health to the world's driest corners. We are driven by the belief that access to clean water is a basic human right. Every SipX bottle is more than just water; it’s a promise to make a difference, a step towards a future where no one is left thirsty. Our commitment lies in delivering not just quality hydration, but a movement of care, sustainability, and impact for communities who need it most.</p>
            </div>
            <div className={styles.approach}>
                <div className={`${styles.aboutInfoImgContainer}`}>
                    <Image src={leavesImg} alt='img' layout='fill' objectFit='cover' objectPosition='bottom' />
                </div>
                <div className={styles.centeringAbout}>
                    <FadeInWhenVisible direction='right' delay={0.5}>
                        <h1>Our Approach.</h1>
                    </FadeInWhenVisible>
                    <FadeInWhenVisible direction='right' delay={0.75}>
                        <p>At SipX, we merge cutting-edge hydration technology with compassionate action. Our unique distribution networks target drought-affected regions, ensuring that every bottle reaches those who need it most. We focus on sustainability, community empowerment, and transparency at every step — because every drop matters.</p>
                    </FadeInWhenVisible>
                </div>
            </div>
            <div className={styles.leafBg}>

            </div>
            <div className={`${styles.approach} ${styles.madeToLastContainer}`}>
                <div className={styles.centeringAbout}>
                    <FadeInWhenVisible direction='left' delay={0.5}>
                        <h1> Impact Beyond Bottles.</h1>
                    </FadeInWhenVisible>
                    <FadeInWhenVisible direction='left' delay={0.75}>
                        <p>SipX is more than a brand; it's a movement. With every bottle you choose, you're directly supporting clean water initiatives, drought relief efforts, and community resilience projects around the world. Together, we’re not just quenching thirst — we’re nurturing hope, rebuilding lives, and creating ripples of change that last generations.</p>
                    </FadeInWhenVisible>
                </div>
                <div className={`${styles.aboutInfoImgContainer}`}>
                    <Image src={shadowImg} alt='img' layout='fill' objectFit='cover' objectPosition='center' />
                </div>
            </div>
            <div className={styles.last}>

            </div>
        </div>
    )
}

export default AboutInfo;