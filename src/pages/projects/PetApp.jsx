import React from "react";
import { Link } from "react-router";
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

export default function PetApp(){
    return(
        <>
        <Intro 
            title="THE PET DATING APP DESIGN"
            subtitle="A community where every dog finds a friend."
            content={[
                "The project aims to create a platform that help dog owners to find compatible playdates for their pets in the new environment. Borrowing from my personal experience to create a safer place for dog owners!",
                "As a pet owner, this is a project I have always been passionate about creating - priorities the functionality and user experience in for ease of use and safety, I have also identified some noticeable gap in the market through the researching."
            ]}
            listTitle="What I Did"
            listItems={["Figma"]}
            img={{ 
                src: DribblePetApp, 
                alt: "The Pet Dating App Dribble Image", 
                id: "dribble-petapp" }} 
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
                { src: PetWireframe1, alt:"The Pet Dating App Wireframe",id:"pet-app-wireframe-1"},
                { src: PetWireframe2, alt:"The Federal Store Wireframe",id:"pet-app-wireframe-2"},
                { src: PetWireframe3, alt:"The Federal Store Wireframe",id:"pet-app-wireframe-3"},
                { src: PetWireframe4, alt:"The Federal Store Wireframe",id:"pet-app-wireframe-4"},
                { src: PetWireframe5, alt:"The Federal Store Wireframe",id:"pet-app-wireframe-5"},
                { src: PetWireframe6, alt:"The Federal Store Wireframe",id:"pet-app-wireframe-6"}
            ]}
        />
        <Content
            heading="Wireframes & Prototype Creating"
            content={[
            "With a clear understanding of user needs and goals, I first created the low-fi wireframes outlining the structure of a “dating” app then modifying to a more pet-focused functionality – profile signup, playmate browsing, setting up playdates, and community board with events around. A group of user testing was done throughout the prototype building additionally.",
            ]}
        />
        <TextBlock 
            heading="Solutions"
            content={[
                "Finaly, the hi-fi wireframes were developed with the brand core colours and visual elements. Google Map Integration was also implemented.",
                "The final prototype was double tested to ensure all the functionalities worked smoothly and met user expectations."
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