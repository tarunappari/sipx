import React, { useEffect, useRef } from 'react'
import styled from 'styled-components';
import logo from '../../public/sipx-logo.svg'
import Image from 'next/image';
import { gsap, Power3 } from 'gsap';

const Navbar = () => {
    let logoRef = useRef(null)
    let item1 = useRef(null)
    let item2 = useRef(null)
    let item3 = useRef(null)
    // const [isHovered, setIsHovered] = useState(false);
    // const lottieRef = useRef();

    // const handleMouseEnter = () => {
    //     setIsHovered(true);
    //     if (lottieRef.current) {
    //         lottieRef.current.play(); // Play the animation on hover
    //     }
    // };

    // const handleMouseLeave = () => {
    //     setIsHovered(false);
    //     if (lottieRef.current) {
    //         lottieRef.current.stop(); // Stop the animation when not hovering
    //     }
    // };


    useEffect(() => {

        const tl = gsap.timeline();
        tl.from(logoRef.current, { duration: 1, opacity: 0, y: 100,skewX: 20 });

        gsap.set([item1.current, item2.current, item3.current], { y: -100, opacity: 0,skewX: -50 });

        // Animate p tags one after another
        tl.to([item1.current, item2.current, item3.current], {
            duration: 1,
            opacity: 1,
            skewX: 0,
            y: 0, // Moves them to their original place
            stagger: 0.3, // One after another
            ease: Power3.easeOut(),
        });

    }, []);


    return (
        <NavbarContainer>
            <div className="left-container">
                <div ref={logoRef}>
                    <Image src={logo} alt="logo" width={100} />
                </div>
            </div>
            <div className="right-container">
                <p ref={item1}>About</p>
                <p ref={item2}>Review</p>
                <p ref={item3}>Articles</p>
            </div>
            {/* <div className='chooseUs-animation'
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                <Lottie lottieRef={lottieRef} loop={false} animationData={testing} autoplay={false} />
                            </div> */}
        </NavbarContainer>
    )
}

export default Navbar;

const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 3rem;
    .right-container{
        display: flex;
        align-items: center;
        gap: 1rem;
        p{
            position: relative;
            font-weight: 500;
            transition: 0.2s;
            cursor: pointer;
            padding: 0.5rem;
            opacity: 1 !important;
        }
        p:hover{
            font-weight: 600;
            font-size: 1.05rem;
        }
    }

    @media (min-width: 1800px) and (max-width: 3008px){
        .right-container{
            p{
                font-size: 1.25rem;
            }
            p:hover{
                font-size: 1.3rem;
            }
        }
        .left-container{
            img{
                width: 12rem;
                padding: 1rem;
            }
        }
    }
`