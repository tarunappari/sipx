import React from 'react'
import styled from 'styled-components';
import Lottie from 'lottie-react';
import smallwave from '../../../public/assets/lottie/smallwave.json'
import community from '../../../public/assets/lottie/community.json'
import sustainability from '../../../public/assets/lottie/sustainability.json'
import purity from '../../../public/assets/lottie/purity.json'

const AboutUs = () => {
    return (
        <AboutUSContainer>
            {/* <div className="content">
                <h4>SIPX</h4>
                <h4>SIPX</h4>
            </div> */}
            <div className="homeBg">
                <Lottie loop={true} animationData={smallwave} />
            </div>
            <div className="top-section">
                <h2>Our <span className="text-gradientt">Journey</span></h2>
                <p>At Sipx, we believe that clean, safe, and pure drinking water is a basic right.</p>
                <p> <span>Our mission is simple:</span> to bring the purest water to every individual, ensuring health and well-being in every sip.</p>
                {/* <p>Our motto is:</p>
                <h3>Together, We Flow Towards Change.</h3> */}
            </div>

            <div className="bottom-section">
                <div className='about-lottie'>
                    <div className='lottie'><Lottie loop={true} animationData={purity} /></div> 
                    <h3>Purity</h3>
                    <p>We source our water from pristine locations and follow strict purification standards.</p>
                </div>
                <div className='about-lottie'>
                    <div><Lottie loop={true} animationData={sustainability} /></div> 
                    <h3>Sustainability</h3>
                    <p> Our packaging is 100% recyclable, and we actively promote waste management initiatives.</p>
                </div>
                <div className='about-lottie'>
                    <div className='lottie'><Lottie loop={true} animationData={community} /></div> 
                    <h3>Community First</h3>
                    <p>We’re committed to giving back through water donation drives and community projects.</p>
                </div>
            </div>
        </AboutUSContainer>
    )
}

export default AboutUs;


let AboutUSContainer = styled.div`
    display: grid;
    grid-template-rows: 33% 67%;
    background-color: #e6f6fd;
    padding: 2rem;
    min-height: 100vh;
    position: relative;
    width: 100%;
    overflow: hidden;
    .homeBg{
    position: absolute;
    top: 0;
    left: 5rem;
    width: 90%;
    height: 100%;
    filter: blur(3px);
    }
    .top-section{
        z-index: 2;
        padding-top: 4rem;
        h2{
            font-size: 3rem;
            text-align: center;
            font-weight: 600;
            padding-bottom: 1rem;
        }
        h3{
            border: 2px solid red;
            text-align: center;
            display: inline;
            margin-left: 42%;
            padding: 1rem;
            margin-top: 1rem;
        }
        p{
            font-size: 1.3rem;
            text-align: center;
            font-weight: 500;
            padding-bottom: 0.5rem;
            span{
                font-weight: 600;
                color: var(--head);
            }
        }
    }

    .bottom-section{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2rem;
        &>div{
            padding: 1rem;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            gap: 0.5rem;
            div{
                width: 7.7rem;
            }
            .lottie{
                width: 20rem;
                height: 20rem;
                div{
                    width: 100%;
                    height: 100%;
                }
            }
            h1,h3{
                font-size: 1.5rem;
                font-weight: 600;
                text-align: center;
            }
            p{
                text-align: center;
            }
        }
    }

    /* .content{
        position: relative;
    }
    .content h4{
        position: absolute;
        color: #fff;
        transform: translate(-50% , -50%);
        font-size: 10rem;
        font-weight: 800;
    }
    .content h4:nth-child(1){
        color: transparent;
        -webkit-text-stroke: 2px var(--darkblue);
        filter: blur(0px);
    }
    .content h4:nth-child(2){
        color: var(--darkblue);
        animation: waterflow 4s ease-in-out infinite;
    }

    @keyframes waterflow {
        0%,100%{
            clip-path: polygon(0% 45%, 15% 44%, 32% 50%, 54% 60%, 70% 61%, 84% 59%, 100% 52%, 100% 100%, 0% 100%);
        }
        50%{
            clip-path: polygon(0% 60%, 16% 65%, 34% 66%, 51% 62%, 67% 50%, 84% 45%, 100% 46%, 100% 100%, 0% 100%);
        }
    } */
`