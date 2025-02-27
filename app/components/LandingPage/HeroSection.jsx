"use client"
import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components';
import Navbar from '../Navbar'
import Lottie from 'lottie-react';
import starfish from '../../../public/assets/lottie/starfish.json'
import order from '../../../public/assets/lottie/order.json'
// import Image from 'next/image';
// import bubble from '../../../public/assets/landingpage/psd/bub.svg'
import { gsap, Power3 } from 'gsap'

const HeroSection = () => {

  let h1Ref = useRef(null)
  let h2Ref = useRef(null)
  let btnRef = useRef(null)

  const [isHovered, setIsHovered] = useState(false);
  const lottieRef = useRef();

  useEffect(() => {
    if (typeof window === "undefined") return; // Ensure GSAP runs only on the client
  
    const tl = gsap.timeline();
  
    if (h1Ref.current && h2Ref.current && btnRef.current) {
      gsap.set([h1Ref.current, ...h2Ref.current.children, btnRef.current], { opacity: 0, y: 100, skewX: 50 });
  
      tl.to([h1Ref.current, ...h2Ref.current.children, btnRef.current], {
        duration: 1,
        opacity: 1,
        y: 0,
        skewX: 0,
        stagger: 0.3,
        ease: Power3.easeOut,
        delay: 2.5,
      });
    }
  }, []);
  


  const handleMouseEnter = () => {
    setIsHovered(true);
    if (lottieRef.current) {
      lottieRef.current.play(); // Play the animation on hover
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (lottieRef.current) {
      lottieRef.current.stop(); // Stop the animation when not hovering
    }
  };

  return (
    <HeroSectionContainer>
      <div className="homeBg">
        <Lottie loop={true} animationData={starfish} />
      </div>
      <div className="info-container">
        <Navbar />
        <div className="herosection">
          <div className="left-container">
            <h1 ref={h1Ref}>At Sipx, we don’t just sell water</h1>
            <div ref={h2Ref}>
              <h2>we <span className='text-gradientt'>deliver</span> </h2>
              <h2 ref={h2Ref}>trust, health, and sustainability</h2>
              <h2>in every <span className="text-gradientt">bottle.</span></h2>
            </div>
            <div className='order-btn'
              ref={btnRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button>Order Now</button>
              <span><Lottie lottieRef={lottieRef} loop={false} animationData={order} autoplay={false} /></span>
            </div>
          </div>
          <div className="blobb">
            {/* <Image src={bubble} alt='nt' width={250}/> */}
          </div>
        </div>
      </div>
      <div className="bottom-container">
        <div className="block1">
          <h3>water is</h3>
          <h3>essential</h3>
        </div>
        <div className="block2"></div>
        <div className="block3"></div>
      </div>
    </HeroSectionContainer>
  )
}

export default HeroSection;

const HeroSectionContainer = styled.div`
    min-height: 100vh;
    position: relative;
    width: 100%;
    overflow: hidden;
    .homeBg{
      position: absolute;
    top: 0rem;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    /* transform: scaleX(-1); */
    }
    .info-container{
      position: relative;
     z-index: 1;
    height: 100%;
    }
    .herosection{
      padding: 1rem;
      display: grid;
      grid-template-columns: 60% 40%;
      .left-container{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 2rem;
        gap: 1rem;
        h1{
          font-size: 1.6rem;
          font-weight: 500;
        }
        h2,h3{
          font-size: 2.5rem;
          
        }
        .order-btn{
          position: relative;
          border: 1px solid red;
          display: flex; 
          align-items: center;
          gap: 0.5rem;
          border: 4px solid var(--darkest);
          background-color: var(--darkest);
          padding-right: 0.7rem;
          border-radius: 2rem;
          cursor: pointer;
          button{
            font-size: 1.1rem;
            font-weight: 700;
            background-color: #e6f6fd;
            padding: 0.3rem 1.5rem;
            border-radius: 2rem;
          }
          span{
            width: 2rem;
            height: 100%;
            border-radius: 2rem;
            display: flex;
            align-items: center;
          }
        }
        /* .order-btn:before {
  content: "";
  position: absolute;
  top: 1.2rem;
  right: 1.8rem;
  height: 60px;
  width: 60px;
  mask: radial-gradient(30px at 30px 30px, transparent 98%, black) -30px -30px;
  background-color: #e6f6fd;
}

.order-btn:after {
  content: "";
  position: absolute;
  top: -.2rem;
  right: 1.8rem;
  height: 60px;
  width: 60px;
  mask: radial-gradient(30px at 30px 30px, transparent 98%, black) -30px -30px;
  background-color: #e6f6fd;
} */
      }
      .blob{
        background-color: var(--darkblue);
        height: 550px;
        width: 550px;
        box-shadow: 0 20px 5px 5px rgba(0,0,0,0.2);
        animation: blobanimation 5s ease-in-out infinite;
        transition: all 1s ease-in-out;
      }

      @keyframes blobanimation {
  0% {
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  }
  50% {
    border-radius: 30% 60% 70% 70% / 50% 60% 30% 40%;
  }
  100% {
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  }
}

    }
    .bottom-container{
      border: 1px solid red;
      display: flex;
      padding: 2rem;
      position: relative;
      bottom: -5rem !important;
      .block1{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: var(--darkblue);
        padding: 2rem;
        height: 15rem;
        width: 10rem;
        box-shadow: 0 10px 2px 2px rgba(0,0,0,0.2);
        animation: blobanimation 5s ease-in-out infinite;
        transition: all 1s ease-in-out;
      }
    }

    @media (min-width: 1800px) and (max-width: 3008px){
      .herosection{
        .left-container{
        h1{
          font-size: 2rem;
        }
        h2,h3{
          font-size: 4rem;
        }
      }
      }
    }

    @media only screen and (max-width:955px){

    }

`