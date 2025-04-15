import React from "react";
import { Link } from "react-router";
import ScrollToTop from "react-scroll-to-top";

import Intro from "../../component/project/Intro";
import Content from "../../component/project/Content";
import Video from "../../component/project/Video";
import TextBlock from "../../component/project/TextBlock";
import Line from "../../component/Line";

import DribbleGiveWise from '../../assets/images/givewise/dribble.png'
import VideoGiveWise from '../../../public/video/givewise.mp4'

export default function GiveWise(){
    return(
        <>
        <Intro 
            title="GIVEWISE BUDGET TRACKING APP DESIGN"
            subtitle="Smart budgeting, seamless giving for everyone."
            content={[
                "This is a group project that aimed to help users stay on up on the budget tracking by linking to multiple bank accounts, and simplifies charitable donation on the interface. "
            ]}
            listTitle="What We Did"
            listItems={["Figma", "Framer","HTML", "CSS", "JS"]}
            img={{ 
                src: DribbleGiveWise, 
                alt: "GiveWise Dribble Image", 
                id: "dribble-givewise" }} 
        />
        <Content
            heading="Brainstorming & Project Management"
            content={[
            "The idea for the project was inspired by all of our personal budgeting experiences. It began with Mor wanting a feature for simple charitable donations, while Sally and I had both used smart budgeting apps, which influenced our focus on user-friendly smart financial budgeting interface. We also followed Agile Methodology to refine ideas through sprints and feedback session weekly."
        ]}
        />
        <TextBlock 
            heading="My Role"
            content="Responsible for UX/UI aspect and the web developing aspect. As for Sally focus on UX/UI design as well, and Mor was the Graphic Designer."
        />
        <Video src={VideoGiveWise}/>
        <Content
            heading="User Research & IA Structure"
            content={[
            "Began by understanding with the user needs, we later understood our main TA are socially conscious millennials aged 18-35. We identified the users and developed the Information Architecture to prioritise the easy of navigation in seamless way.",
            "Most of the research and design work was conducted using Figma. The structure was designed to facilitate easy navigation, allowing users to link bank accounts, track expenses, and manage charitable donations within our wireframe."
        ]}
        />
        <Content 
            heading="Wireframe & Implementation"
            content={[
                "We began by sketching low-fidelity wireframes, focusing on page consistency and intuitive navigation. The design emphasised how users could seamlessly link their accounts, enabling automatic self-categorization of expenses. Later, we developed a brand guideline to ensure the high-fidelity wireframes remained consistent in terms of font sizes, colours, and button styles.",
                "The wireframes were uploaded to Framer to allow for easy editing and website customisation. After implementation, some adjustments were necessary following cross-device testing, primarily focusing on improving mobile optimization which I am still adjusting with React.js to make it full responsive."
            ]}
        />
        <TextBlock 
            heading="Challenge"
            content="Since there's alot of components that need to be finalised, I am still developing for making it a live-site. The implementation for cross page animation for each page was solved by using several npm packages including gsap and framer-motion."
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
                </div>
            <Line width={500} color="#F6F2EC" />
        </div>
        </>
    )
}