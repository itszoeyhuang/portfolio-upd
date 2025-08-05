import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router";

import ScrollToTop from "react-scroll-to-top";
import ScrollVelocity from '../component/effects/ScrollVelocity';
import ScrollReveal from "../component/effects/ScrollReveal";
import StickerPeel from "../component/effects/StickerPeel";

import ProfilePic from '../assets/images/profile-pic.jpg'
import DogPic from '../assets/images/polaroid/dan-dan.png'
import MelbournePic from '../assets/images/polaroid/melbourne-2.png'
import PolaroidPic from '../assets/images/polaroid/polaroid.png'
import TaipeiPic from '../assets/images/polaroid/taipei.png'

import '../main.css'
import '../global/About.css'

const experienceData = [
    {
        role: 'Luxury Retail Associate',
        company: 'MultiBrand Bouqitue',
        location: 'Melbourne'
    },
    {
        role: 'Fashion Merchandising Assistant',
        company: 'Luxury Babywear',
        location: 'Taipei'
    },
    {
        role: 'Digital Marketing Specialist',
        company: 'Vornado Taiwan',
        location: 'Taipei'
    },
    {
        role: 'Fashion Retail Ambassador',
        company: 'Roden Gray',
        location: 'Vancouver'
    },
    {
        role: 'Creative Developer...',
        company: 'Currently open and available',
        location: ''
    }
];

const connectData = [
    {
      title: 'Programming Language',
      items: ['HTML, CSS, Javascript, ReactJs, TailwindCSS, WordPress, Shopify Liquid']
    },
    {
      title: 'Visual Design',
      items: ['Photoshop, Illustrator, InDesign, After Effect, Dimension']
    },
    {
      title: 'User Design',
      items: ['Figma']
    },
    {
      title: 'Productivity Software',
      items: ['Microsoft Word, Excel, Powerpoint']
    },
    {
      title: 'Product Management',
      items: ['Trello, Monday, Slack']
    }
];

export default function About(){
    return(
        <>
        <Helmet>
            <title> About Zoey Huang | Creative Developer Portfolio</title>
            <meta 
                name="description" 
                content="Learn about Zoey Huang, originally from Taiwan now a front-end developer based in Vancouver with a background in fashion and marketing. Zoey Huang is coming from a multicultural background, fluent in English, Mandarin, and Taiwanese. Zoey Huang passion for creativity and fashion led me to study fashion in Melbourne, Australia, and later pursue a career in retail and merchandising over the past few years." 
            />

            <meta property="og:title" content="About Zoey Huang | Product Developer Portfolio" />
            <meta property="og:description" content="Learn about Zoey Huang, originally from Taiwan now a creative developer based in Vancouver with a background in fashion and marketing. Zoey Huang is coming from a multicultural background, fluent in English, Mandarin, and Taiwanese. Zoey Huang passion for creativity and fashion led me to study fashion in Melbourne, Australia, and later pursue a career in retail and merchandising over the past few years." />
            <meta property="og:image" content={ProfilePic} /> 
            <meta property="og:url" content="https://www.itszoeyhuang.com/about" />
            <link rel="canonical" href="https://www.itszoeyhuang.com/about" />
        </Helmet>
        
        <div className="container">
                <div className="about-page-grid">
                    <div className="road-style-divider">
                        <ScrollVelocity texts={['ABOUT ME']} velocity={-50} numCopies={15} />
                    </div>
                    <div className="grid-item grid-header-intro-left">
                        <h1 className="title1">
                            Crafting From
                            <span className="emphasis">Fashion Marketing</span> 
                            to <span className="emphasis_italic">Digital Design</span>
                        </h1>
                        <div className="grid-intro-image">
                            <img src={ProfilePic} alt="Zoey Huang Profile" className="profile-pic" />
                        </div>
                    </div>
                    <div className="grid-item grid-header-intro-right">
                        <h1 className="title2">
                            Driving Brand
                            <span className="emphasis">Visibility</span>
                            and <span className="emphasis_italic">Digital Impact</span>
                        </h1>
                        <div className="grid-intro-text">
                            <ScrollReveal>
                                <p>Hello! Originally from Taiwan, currently based in Vancouver, B.C. Inspired by bold aesthetics and focusing on interactive design and digital marketing which led me to pursue as a creative developer.</p>
                                <p>With strong background in fashion retail and digital marketing aspects, I enjoy combining high aesthetics & functionality to life.</p>
                                <p>I discovered that designing and creating websites brings me a sense of peace, allowing me to immerse myself in a space that feels truly my own.</p>
                            </ScrollReveal>
                        </div>
                    </div>
                    
                    <div className="road-style-divider">
                        <ScrollVelocity texts={["WHERE IVE BEEN"]} velocity={50} numCopies={15} />
                    </div>
                    <div className="grid-item grid-experience-text">
                        <ScrollReveal>
                           <p>Coming from a multicultural background, I’m fluent in English, Mandarin, and Taiwanese. My passion for creativity and fashion led me to study fashion merchandising in Melbourne, Australia, and later pursue a career in retail and digital marketing over the past few years</p>
                           <br />
                           <p>I aim to bridge the gap between creative vision and digital execution — building beautiful, functional websites that empower emerging brands, independent artists, and creatives to thrive online.</p>
                           <br />
                           <p>With a background in fashion retail and marketing, I bring both aesthetic and brand strategy into every project — from minimal e-commerce shops to experimental portfolios.</p>
                        </ScrollReveal>
                    </div>
                    <div className="grid-item grid-experience-timeline">
                        <div className="timeline-container">
                            {experienceData.map((item, index) => (
                                <div className="timeline-item" key={index}>
                                    <div className="timeline-node"></div>
                                    <div className="timeline-content">
                                        <h5>{item.role}</h5>
                                        <div className="timeline-details">
                                            <p>{item.company}</p>
                                            <p>{item.location}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="road-style-divider">
                        <ScrollVelocity texts={["BEHIND THE SCREEN"]} velocity={50} numCopies={15} />
                    </div>
                    <div className="grid-item grid-hobbie-text">
                        <ScrollReveal>
                           <p>When I’m behind my screen, I’m probably cuddling my 16-year-old Maltese (he’s basically my boss).</p>
                           <br />
                           <p>I’m a total matcha addict, a slightly obsessed indoor plant collector, and someone who genuinely enjoys the little joys of retail—like shopping and having casual conversations with all kinds of customers. Honestly, that’s always been the most fun part of working in fashion retail for me.</p>
                        </ScrollReveal>
                    </div>
                    <div className="behind-the-screen-image">
                        <StickerPeel
                            imageSrc={DogPic}
                            width={160}
                            rotate={360}
                            peelBackHoverPct={15}
                            peelBackActivePct={30}
                            shadowIntensity={0}
                            lightingIntensity={0.1}
                            initialPosition={{ x: 125, y: 80 }}
                        />
                        <StickerPeel 
                            imageSrc={MelbournePic}
                            width={160}
                            rotate={360}
                            peelBackHoverPct={20}
                            peelBackActivePct={40}
                            shadowIntensity={0}
                            lightingIntensity={0.1}
                            initialPosition={{ x: 330, y: 40 }}
                        />
                        <StickerPeel 
                            imageSrc={PolaroidPic}
                            width={160}
                            rotate={360}
                            peelBackHoverPct={20}
                            peelBackActivePct={40}
                            shadowIntensity={0}
                            lightingIntensity={0.1}
                            initialPosition={{ x: 550, y: 60 }}
                        />
                        <StickerPeel 
                            imageSrc={TaipeiPic}
                            width={160}
                            rotate={360}
                            peelBackHoverPct={20}
                            peelBackActivePct={40}
                            shadowIntensity={0}
                            lightingIntensity={0.1}
                            initialPosition={{ x: 750, y: 100 }}
                        />
                        <h6>Drag Me!</h6>
                    </div>
                    <div className="road-style-divider">
                        <ScrollVelocity texts={['FUTURE VISION']} velocity={-50} numCopies={15} />
                    </div>
                    <div className="grid-item grid-vision-text" id="vision-text">
                        <ScrollReveal>
                           <p>My goal is to build beautiful, functional websites, with a strong focus on e-commerce for emerging brands, creatives, and independent artists. I’m passionate about helping those with bold ideas but limited technical resources establish a powerful digital presence.</p>
                           <br />
                           <p>I want to be someone who helps turn ideas into interfaces — bridging the gap between vision and execution. Whether it’s a minimal e-commerce shop or an experimental digital portfolio.</p>
                        </ScrollReveal>
                        <Link to='/work'>
                           <h5 className="vision-work-text">WORK</h5>
                        </Link>
                    </div>
                    <div className="grid-item grid-toolkit-list">
                        <div className="connect-frame">
                            <h1>TOOL KIT</h1>
                            <div className="connect-list">
                                {connectData.map((item, index) => (
                                    <div className="toolkits-item" key={index}>
                                        <h6>{item.title}</h6>
                                        {item.items && <p>{item.items.join(', ')}</p>}
                                    </div>
                                ))}
                            </div>
                        </div>
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
        </div>
        </>
    )
}