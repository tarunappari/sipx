"use cient"
import React from 'react'
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import smallwave from '@/public/assets/lottie/smallwave.json'
import community from '@/public/assets/lottie/community.json'
import sustainability from '@/public/assets/lottie/sustainability.json'
import purity from '@/public/assets/lottie/purity.json'
import styles from '@/styles/landingpage/Journey.module.scss'

const Journey = () => {
  return (
    <div className={styles.container}>
      <div className={styles.homeBg}>
        <Lottie loop={true} animationData={smallwave} />
      </div>
      <div className={styles.topSection}>
        <h1>Our <span className="text-gradientt">Journey</span></h1>
        <p>At Sipx, we believe that clean, safe, and pure drinking water is a basic right.</p>
        <p> <span>Our mission is simple:</span> to bring the purest water to every individual, ensuring health and well-being in every sip.</p>
        {/* <p>Our motto is:</p>
                <h3>Together, We Flow Towards Change.</h3> */}
      </div>

      <div className={styles.bottomSection}>
        <div className={styles.aboutLottie}>
          <div className={styles.lottie}><Lottie loop={true} animationData={purity} /></div>
          <h3>Purity</h3>
          <p>We source our water from pristine locations and follow strict purification standards.</p>
        </div>
        <div className={styles.aboutLottie}>
          <div><Lottie loop={true} animationData={sustainability} /></div>
          <h3>Sustainability</h3>
          <p> Our packaging is 100% recyclable, and we actively promote waste management initiatives.</p>
        </div>
        <div className={styles.aboutLottie}>
          <div className={styles.lottie}><Lottie loop={true} animationData={community} /></div>
          <h3>Community First</h3>
          <p>We’re committed to giving back through water donation drives and community projects.</p>
        </div>
      </div>
    </div>
  )
}

export default Journey;