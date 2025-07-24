import React from "react";
import { Link } from "react-router";
import { Helmet } from "react-helmet";
import ScrollToTop from "react-scroll-to-top";

import Intro from "../../component/project/Intro";
import Content from "../../component/project/Content";
import Wireframes from "../../component/project/Wireframes";
import TextBlock from "../../component/project/TextBlock";
import Upcoming from "../../component/project/Upcoming";
import Line from "../../component/Line";

import DribblePetApp from '../../assets/images/pet-app/dribble.jpg'
import DribbleGiveWise from '../../assets/images/givewise/dribble.png'
import DribbleFederal from '../../assets/images/the-federal-store/dribble.png'
import PetWireframe1 from '../../assets/images/pet-app/wireframe1.png'
import PetWireframe2 from '../../assets/images/pet-app/wireframe2.png'
import PetWireframe3 from '../../assets/images/pet-app/wireframe3.png'
import PetWireframe4 from '../../assets/images/pet-app/wireframe4.png'
import PetWireframe5 from '../../assets/images/pet-app/wireframe5.png'
import PetWireframe6 from '../../assets/images/pet-app/wireframe6.png'
import PetEmpathyMap from '../../assets/images/pet-app/empathy-map.jpg'
import PetUserFlow from '../../assets/images/pet-app/userflow.jpg'

export default function PetApp(){
    return(
        <>
        <Helmet>
             <title>Pet Dating App Design Project | Zoey Huang's Portfolio</title>
            <meta 
                name="description" 
                content="From personal experience to a community platform. This UX/UI case study explores the creation of a pet dating app designed to ease the awkwardness of finding playmates, fostering a safe and friendly community where every dog can find a friend." 
            />
            <meta property="og:title" content="A Pet Dating App | A UX/UI Case Study by Zoey Huang" />
            <meta property="og:description" content="Inspired by personal experience, this app is designed to help dog owners connect and schedule safe, enjoyable playdates for their pets." />
            <meta property="og:image" content={DribblePetApp} /> 
            <meta property="og:url" content="https://www.itszoeyhuang.com/work/pet-app" />
            <link rel="canonical" href="https://www.itszoeyhuang.com/work/pet-app" />
        </Helmet>
        <Intro 
            title="THE PET DATING APP DESIGN"
            subtitle="A community where every dog finds a friend."
            content={[
                "This project explores a mobile platform that helps dog owners connect and schedule compatible playdates for their pets in a new environment.",
                "This app is designed to help dog owners connect with like-minded individuals and schedule safe, enjoyable playdates for their pets inspired by my personal experience in daily life."
            ]}
            listTitle="What I Did"
            listItems={["Figma"]}
            roleTitle="Role"
            roleItems={["UX/UI Designer"]}
            durationTitle="Duration"
            durationItems={["4 weeks"]}
            img={{ 
                src: DribblePetApp, 
                alt: "The Pet Dating App Dribble Image", 
                id: "dribble-petapp" }} 
        />
        <Content
            heading="Project Overview"
            content={[
            "The idea stemmed from my personal experience with my dog's certain breed/colour preference, sparking the concept of a platform that connects all dog breeds and fosters a more friendly community for pet owners."
            ]}
        />
        <Content
            heading="Brainstorming & User Research"
            content={[
            "The idea stemmed from my personal experience with my dog's certain breed/colour preference, sparking the concept of a platform that connects all dog breeds and fosters a more friendly community for pet owners.",
            "Drawing from my own experiences for user research, I identified key challenges like the awkwardness of approaching strangers and the unpredictability of other dog's behaviour - insights that shaped the app's user scenarios and design approach."
            ]}
        />
        <Wireframes 
            images={[
                { src: PetEmpathyMap, alt:"The Pet Dating App Empathy Map", caption: "Empathy Map"},
                { src: PetUserFlow, alt:"The Federal Store User Flow", caption: "User Flow"}
            ]}
        />
        <Content
            heading="Wireframes & Prototype Creating"
            content={[
            "With a clear understanding of user needs and goals, I first created the low-fi wireframes outlining the structure of a “dating” app then modifying to a more pet-focused functionality – profile signup, playmate browsing, setting up playdates, and community board with events around. A group of user testing was done throughout the prototype building additionally.",
            ]}
        />
        <Wireframes 
            images={[
                { src: PetWireframe1, alt:"The Pet Dating App Wireframe", caption: "User Profile Setup"},
                { src: PetWireframe3, alt:"The Federal Store Wireframe", caption: "User Profile Setup"},
                { src: PetWireframe4, alt:"The Federal Store Wireframe", caption: "User Profile Setup"},
                { src: PetWireframe5, alt:"The Federal Store Wireframe", caption: "User Profile Setup"},
                { src: PetWireframe6, alt:"The Federal Store Wireframe", caption: "User Profile Setup"},
                { src: PetWireframe2, alt:"The Federal Store Wireframe", caption: "User Profile Setup"},
            ]}
        />
        <TextBlock 
            heading="Solutions & Reflection"
            content={[
                "Finaly, the hi-fi wireframes were developed with the brand core colours and visual elements. Google Map Integration was also implemented. The final prototype was double tested to ensure all the functionalities worked smoothly and met user expectations.","Designing this app allowed me to explore how user empathy and personal experience can shape meaningful digital solutions. I realized how important it is to prioritize safety, comfort, and accessibility in community-based platforms."
            ]}
        />
        <Upcoming 
            projects={[
                {
                    img:{
                        src: DribbleGiveWise, 
                        alt:"GiveWise Dribble Image", id:"dribble-givewise"
                    },
                    subtitle:"GiveWise Budgeting App",
                    content:"Smart budgeting, seamless giving.",
                    path:"/work/givewise"
                },
                {
                    img:{
                        src: DribbleFederal, 
                        alt:"The Pet Dating App Dribble Image", id:"dribble-petdating"
                    },
                    subtitle:"Federal Store Mobile Redesign",
                    content:"Refining users’ mobile ordering experience.",
                    path:"/work/federal-store-redesign"
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
                    <Link to="/work/pet-app">GiveWise Budgeting App</Link>
                </div>
            <Line width={500} color="#F6F2EC" />
        </div>
        </>
    )
}