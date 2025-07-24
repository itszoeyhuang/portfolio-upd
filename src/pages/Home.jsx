import React, {} from 'react'
import { Link } from 'react-router'
import { Fade } from "react-awesome-reveal"
import { Helmet } from 'react-helmet'
import FlowingMenu from '../component/FlowingMenu'
import ScrollToTop from "react-scroll-to-top";

import GradientBackground from '../component/GradientBackground'
import Line1 from '../assets/images/line-1.jpeg'
import Line2 from '../assets/images/line-2.jpeg'
import Line3 from '../assets/images/line-3.jpeg'
import Line4 from '../assets/images/line-4.jpeg'
import DribbleFederal from '../assets/images/the-federal-store/dribble.png'
import IntroLunchLady from '../assets/images/the-lunch-lady/intro.jpg'
import DribblePetApp from '../assets/images/pet-app/dribble.jpg'
import DribbleGiveWise from '../assets/images/givewise/dribble.png'

import '../global/Home.css'
import '../main.css'

const demoItems = [
    { link: '/work/federal-store-redesign', text: 'Federal Store Redesign', image: DribbleFederal },
    { link: '/work/the-lunch-lady', text: 'Lunch Lady Redesign', image: IntroLunchLady },
    { link: '/work/pet-app', text: 'Pet Dating App', image: DribblePetApp },
    { link: '/work/givewise', text: 'GiveWise - Budget Tracking App', image: DribbleGiveWise }
  ];

export default function Home(){
    return(
    <>
    <Helmet>
        <title> Zoey Huang - Creative Product Developer and Digital Marketing Specialist</title>
        <meta 
            name='description'
            content='Explore Zoey Huang portfolio, a creative product developer and digital marketing specialist in Vancouver, blending high aesthetic and functionality in interactive design and user experience.'
        />
        <link 
            rel='canonical'
            href="https://www.itszoeyhuang.com"
        />

        <meta property="og:title" content="Zoey Huang Portfolio - Creative Product Developer" />
        <meta property="og:description" content="A portfolio featuring ux/ui design projects, web-development projects, and digital marketing projects." />
        <meta property="og:type" content="website" />

        <meta property="og:url" content="https://www.itszoeyhuang.com" />
        <link rel="canonical" href="https://www.itszoeyhuang.com" />
    </Helmet>
    <GradientBackground />
       <div className="container">
        <div className="container-main">
            <div className="hero-intro">
                <Fade 
                    direction='left' 
                    cascade
                    duration={1000}
                >
                    <div className="intro-line">
                        <span className='emphasis'><h6>A Product Developer</h6></span>
                        <span><h6>inspired by</h6></span>
                        <img src={ Line1 } alt='line-1-image' id='line-1-img' ></img>
                        <span><h6>nature and specialising</h6></span>
                    </div>
                    <div className="intro-line">
                        <span><h6>in interactive design</h6></span>
                        <img src={ Line2 } alt='line-2-image' id='line-2-img'></img>
                        <span><h6>and</h6></span>
                        <span className='emphasis'><h6>user experience and digital marketing</h6></span>
                    </div>
                    <div className="intro-line">
                        <span><h6>I'm currently based in Vancouver.</h6></span>
                        <img src={ Line3 } alt='line-3-image' id='line-3-img'></img>
                        <span><h6>With a background in</h6></span>
                    </div>
                    <div className="intro-line">
                        <span><h6>fashion and marketing,</h6></span>
                        <img src={ Line4 } alt='line-4-image' id='line-4-img'></img>
                    </div>
                    <div className="intro-line">
                        <span><h6>I enjoy combining</h6></span>
                        <span className='emphasis'><h6>high aesthetic</h6></span>
                        <span><h6>and</h6></span>
                        <span className='emphasis'><h6>functionality</h6></span>
                        <span><h6>to life.</h6></span>
                    </div>
                </Fade>
                <Link to='/about'>
                    <button className="btn">
                        <button className="email">
                            <h6>About Me</h6>
                        </button>
                    </button>
                </Link>
            </div>
        </div>
    </div>
    <div className="project">
        <h1 className='project-title'>PROJECTS</h1>
        <div className='flowing-menu'style={{ height: '600px', position: 'relative' }}>
        <FlowingMenu items={demoItems} />
        </div>
    </div>
    <ScrollToTop 
        smooth 
        style={{
            backgroundColor: "transparent",
            boxShadow: "none"
        }}
        component={
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#F6F2EC"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <polyline points="18 15 12 9 6 15" />
            </svg>
        }
    />
    </>
    )
}