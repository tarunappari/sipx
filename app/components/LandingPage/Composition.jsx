import React from 'react'
import styled from 'styled-components';
import Lottie from 'lottie-react';
import smallwave from '../../../public/assets/lottie/smallwave.json'
import superhero from '../../../public/assets/lottie/superhero.json'

const Composition = () => {
    return (
        <CompositionContainer>
            <div className="homeBg">
                <Lottie loop={true} animationData={smallwave} />
            </div>
            <div className="left-container">
                <div className="title">
                    <h2>Water Composition – The Power Within Every Drop</h2>
                    <p>At Sipx, every drop of water isn’t just pure—it’s infused with strength, energy, and balance, much like the hidden power within a hero. Our carefully balanced mineral composition fuels your body, ensuring optimal hydration and peak performance, just like a superhero ready to take on the world.</p>
                </div>
                <div className="composition">
                    <div className="first">
                        <div>
                            <h1>Magnesium (Mg²⁺) – Strength & Energy</h1>
                            <p>Powers muscles, nerves, and energy levels, keeping you active and unstoppable.</p>
                        </div>
                        <div>
                            <h1>Sulfate (SO₄²⁻) – Detox & Digestion</h1>
                            <p>Flushes toxins, supports digestion, and keeps your system light and refreshed.</p>
                        </div>
                        <div>
                            <h1>Potassium (K⁺) – Heart & Hydration</h1>
                            <p>Regulates blood pressure, muscle function, and hydration for peak performance.</p>
                        </div>
                    </div>
                    <div className="second">
                        bottle pic
                    </div>
                    <div className="third">
                        <div>
                            <h1>Bicarbonate (HCO₃⁻) – pH Balance & Metabolism </h1>
                            <p>Neutralizes acidity, aids digestion, and maintains your body’s balance.</p>
                        </div>
                        <div>
                            <h1>Calcium (Ca²⁺) – Bone & Teeth Strength</h1>
                            <p>Strengthens bones, teeth, and muscles, ensuring resilience.</p>
                        </div>
                        <div>
                            <h1> Chloride (Cl⁻) – Fluid Balance & Digestion</h1>
                            <p>Maintains fluid balance and aids digestion for smooth body function.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right-container">
                <Lottie loop={true} animationData={superhero} />
            </div>
        </CompositionContainer>
    )
}

export default Composition;


const CompositionContainer = styled.div`
    min-height: 100vh;
    max-height: 100vh;
    overflow: hidden;
    background-color: #e6f6fd;
    display:grid;
    grid-template-columns: 65% 35%;
    position: relative;
    .homeBg{
    position: absolute;
    top: 0;
    left: 5rem;
    width: 90%;
    height: 100%;
    filter: blur(3px);
    transform: scaleX(-1); 
    }
    .left-container{
        padding:2rem;
        .title{
            h2{
                font-size: 3rem;
                text-align: center;
            }
            p{
                font-size: 1.2rem;
                text-align: center;
            }
        }
        .composition{
            display:grid;
            grid-template-columns: 35% 30% 35%;
            height:80%;
            .first,.second,.third{
                display: flex;
                flex-direction: column;
                justify-content: space-evenly;
                align-items: center;
                h1{
                    font-size: 1.2rem;
                    font-weight: 700;
                    text-align: center;
                }
                p{
                    text-align: center;
                }
            }
        }
    }
    .right-container{
        &>div{
            height:90%;
        }
    }
`