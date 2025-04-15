import React from "react"
import ScrollToTop from "react-scroll-to-top";
import ProjectItemA from "../component/ProjectItemA"
import ProjectItemB from "../component/ProjectItemB"
import DecryptedText from "../component/effects/DecryptedText"
import Line from "../component/Line"

import IntroFederal from '../assets/images/the-federal-store/intro.png'
import DribbleFederal from '../assets/images/the-federal-store/dribble.png'
import IntroLunchLady from '../assets/images/the-lunch-lady/intro.jpg'
import DribbleLunchLady from '../assets/images/the-lunch-lady/dribble.jpg'
import IntroPetApp from '../assets/images/pet-app/intro.png'
import DribblePetApp from '../assets/images/pet-app/dribble.jpg'
import IntroGiveWise from '../assets/images/givewise/intro.png'
import DribbleGiveWise from '../assets/images/givewise/dribble.png'

import '../global/Work.css'
import '../main.css'


export default function Work(){
    return(
        <>
        <div className="container">
            <div className="grid" id="hero-section" >
                <div className="project-title" id="title_mobile-display" >
                    <h2 className='mark1' >“</h2>
                    <h1 className="hero-title">PROJECTS</h1>
                    <h2 className='mark2' >“</h2>
                </div>
                <div className="sub-title">
                    <h4>
                        <DecryptedText 
                            text="I design, I create. Below are some of the projects during the New Media and Web Design Program at BCIT."
                            speed={100}
                            maxIterations={20}
                            characters="ABCD1234!?"
                            className="revealed"
                            parentClassName="all-letters"
                            encryptedClassName="encrypted"
                        />
                    </h4>
                </div>
            </div>
            <div className="project-overview">
            <ProjectItemA
                order="01"
                images={[
                    { src: IntroFederal, alt: "The Federal Store Intro Image", id: "intro-federal"},
                    { src: DribbleFederal, alt: "The Federal Store Dribble Image", id: "dribble-federal"}
                ]}
                title="Federal Store Mobile Redesign"
                description="Refining users’ mobile ordering experience."
                skills="Figma"
                url="/work/federal-store-redesign"
            />
            <div className="line">
                <Line color="#F6F2EC" />
            </div>
            <ProjectItemB
                order="02"
                images={[
                    { src: IntroLunchLady, alt: "The Lunch Lady Intro Image", id: "intro-lunchlady"},
                    { src: DribbleLunchLady, alt: "The Lunch Lady Dribble Image", id: "dribble-lunchlady"}
                ]}
                title="The Lunch Lady Website Redesign"
                description="Enhancing its digital presence."
                skills={["HTML", "CSS", "Javascript"]}
                url="/work/the-lunch-lady"
            />
            <Line width={1257} color="#F6F2EC" />
            <ProjectItemA 
                order="03"
                images={[
                    { src: IntroPetApp, alt:"The Pet Dating App Intro Image", id:"intro-pet-app"},
                    { src: DribblePetApp, alt:"The Pet Dating App Dribble Image", id:"dribble-pet-app"}
                ]}
                title="Pet Dating App Design"
                description="A community where every dog finds a friend."
                skills="Figma"
                url="/work/pet-app"
            />
            <Line width={1257} color="#F6F2EC" />
            <ProjectItemB 
                order="05"
                images={[
                    { src: DribbleGiveWise, alt:"Givewise Budgeting App Dribble Image", id:"dribble-givewise"},
                    { src: IntroGiveWise, alt:"Givewise Budgeting App Intro Image", id:"intro-givewise"},
                ]}
                title="GiveWise - Budget Tracking App"
                description="Smart budgeting, seamless giving."
                skills={["HTML", "CSS", "React.js", "Tailwindcss"]}
                url="/work/givewise"
                
            />
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