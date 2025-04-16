import React from "react";
import { Link } from 'react-router';
import ScrollToTop from "react-scroll-to-top";

import Intro from "../../component/project/Intro";
import Content from "../../component/project/Content";
import Wireframes from "../../component/project/Wireframes";
import TextBlock from "../../component/project/TextBlock";
import Upcoming from "../../component/project/Upcoming";
import Line from "../../component/Line";

import DribbleFederal from '../../assets/images/the-federal-store/dribble.png'
import FederalWireframe1 from '../../assets/images/the-federal-store/wireframe1.jpg'
import FederalWireframe2 from '../../assets/images/the-federal-store/wireframe2.jpg'
import FederalWireframe3 from '../../assets/images/the-federal-store/wireframe3.jpg'
import FederalWireframe4 from '../../assets/images/the-federal-store/wireframe4.jpg'
import FederalWireframe5 from '../../assets/images/the-federal-store/wireframe5.jpg'
import IntroLunchLady from '../../assets/images/the-lunch-lady/intro.jpg'
import DribblePetApp from '../../assets/images/pet-app/dribble.jpg'
import { link, path } from "framer-motion/client";

export default function FederalStore(){
    return(
        <>
        <Intro 
            title="FEDERAL STORE MOBILE REDESIGN"
            subtitle="Refining users' mobile ordering experience."
            content={[
                "The mobile app redesign mockup project for the Vancouver based cafe is mainly to enhance user’s mobile ordering experience, also generating more online sales for the café.",
                "Started by identifying the challenges for the store mobile experience, the site struggles with limited mobile optimisation such as unclear categorisation leading customers facing difficulty in getting the pastries overview and ordering."
            ]}
            listTitle="What I Did"
            listItems={["Figma", "HTML", "CSS", "Javascript"]}
            img={{ 
                src: DribbleFederal, 
                alt: "The Federal Store Dribble Image", 
                id: "dribble-federal" }} 
            />
            <Content
                heading="Wireframe & Prototype Creating"
                content={[
                    "The low fidelity wireframes and prototypes were created using insights from user study and researches.",
                    "The redesign shows clear cake categorisation by flavours with filter option implemented, also enhanced with icons and infographics. The wireframes aim to reduce excessive scrolling and actions like adding item to the cart etc."
                ]}
            />
            <Wireframes 
                images={[
                    { src: FederalWireframe1, alt:"The Federal Store Wireframe",id:"federal-wireframe-1"},
                    { src: FederalWireframe2, alt:"The Federal Store Wireframe",id:"federal-wireframe-2"},
                    { src: FederalWireframe3, alt:"The Federal Store Wireframe",id:"federal-wireframe-3"},
                    { src: FederalWireframe4, alt:"The Federal Store Wireframe",id:"federal-wireframe-4"},
                    { src: FederalWireframe5, alt:"The Federal Store Wireframe",id:"federal-wireframe-5"}
                ]}
            />
            <Content
                heading="Hi-fidelity Prototype & Case Study"
                content={[
                    "The low fidelity wireframes and prototypes were created using insights from user study and researches. The redesign Once the low fidelity wireframes were ready, key improvements included incorporating with the website’s primary colour  - beige and its logo’s core colour – red.",
                    "The main intent of the redesign was to refine customer’s shopping experience that includes adding real time availability, filtering system, review system and multiple delivery options.   clear cake categorisation by flavours with filter option implemented, also enhanced with icons and infographics. The wireframes aim to reduce excessive scrolling and actions like adding item to the cart etc."
                ]}
            />
            <div className="text-block">
                <TextBlock
                    heading="Challenge"
                    content="The existing mobile interface lacked clear categorisation with clutter information, making it difficult for users to navigate and find pastries efficiently."
                />
                <TextBlock 
                    heading="Solutions"
                    content={[
                        "I have implemented a clearer category structure based on the pasty flavours for better UI suggestions.",
                        "Also, I added filter options to enhance product discovery which reduce excessive scrolling by presenting key products upfront only."
                    ]}
                />
            </div>
            <Upcoming 
                projects={[
                    {
                        img:{
                            src: IntroLunchLady, 
                            alt:"The Lunch Lady Intro Image", id:"intro-lunchlady"
                        },
                        subtitle:"The Lunch Lady Website Redesign",
                        content:"Enhancing its digital presence.",
                        path:"/work/the-lunch-lady"
                    },
                    {
                        img:{
                            src: DribblePetApp, 
                            alt:"The Pet Dating App Dribble Image", id:"dribble-petdating"
                        },
                        subtitle:"Pet Dating App",
                        content:"A community where every dog finds a friend.",
                        path:"/work/pet-app"
                    },
                ]}
            />
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
            <div className="mobile-only">
                <Line width={500} color="#F6F2EC" />
                    <div className="mobile-only_content">
                        <Link to="/work">Back To Work</Link>
                        <Link to="/work/the-lunch-lady">Lunch Lady Redesign</Link>
                    </div>
                <Line width={500} color="#F6F2EC" />
            </div>
        </>
    )
}