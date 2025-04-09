import React from 'react'
import Lottie from 'lottie-react';
import smallwave from '@/public/assets/lottie/smallwave.json'
import superhero from '@/public/assets/lottie/superhero.json'
import bottle from '@/public/assets/landingpage/croppedBottle.png'
import styles from '@/styles/landingpage/Composition.module.scss'
import Image from 'next/image';

const Composition = () => {
    return (
        <div className={styles.container}>
            <div className={styles.homeBg}>
                <Lottie loop={true} animationData={smallwave} />
            </div>
            <div className={styles.leftContainer}>
                <div className={styles.title}>
                    <h2>Water Composition – The Power Within Every Drop</h2>
                    <p>At Sipx, every drop of water isn’t just pure—it’s infused with strength, energy, and balance, much like the hidden power within a hero. Our carefully balanced mineral composition fuels your body, ensuring optimal hydration and peak performance, just like a superhero ready to take on the world.</p>
                </div>
                <div className={styles.composition}>
                    <div className={styles.first}>
                        <div>
                            <h1>Magnesium (Mg²⁺)  </h1>
                            <p>Strength & Energy</p>
                        </div>
                        <div>
                            <h1>Sulfate (SO₄²⁻) </h1>
                            <p>Detox & Digestion</p>
                        </div>
                        <div>
                            <h1>Potassium (K⁺)</h1>
                            <p> Heart & Hydration</p>
                        </div>
                    </div>
                    <div className={styles.second}>
                        <Image src={bottle} alt='img' />
                    </div>
                    <div className={styles.third}>
                        <div>
                            <h1>Bicarbonate (HCO₃⁻)  </h1>
                            <p>pH Balance & Metabolism</p>
                        </div>
                        <div>
                            <h1>Calcium (Ca²⁺)</h1>
                            <p>Bone & Teeth Strength</p>
                        </div>
                        <div>
                            <h1> Chloride (Cl⁻) </h1>
                            <p> Fluid Balance & Digestion</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.rightContainer}>
                <Lottie loop={true} animationData={superhero} />
            </div>
        </div>
    )
}

export default Composition;