import React from "react";
import { Link } from "react-router";
import ScrollToTop from "react-scroll-to-top";

import Intro from "../../component/project/Intro";
import Content from "../../component/project/Content";
import Video from "../../component/project/Video";
import TextBlock from "../../component/project/TextBlock";
import Upcoming from "../../component/project/Upcoming";
import Line from "../../component/Line";

import DribbleLunchLady from '../../assets/images/the-lunch-lady/dribble.jpg'
import DribblePetApp from '../../assets/images/pet-app/dribble.jpg'
import DribbleGiveWise from '../../assets/images/givewise/dribble.png'
import VideoLunchLady from '../../../public/video/lunch-lady.mp4'

export default function LunchLady(){
    return(
        <>
        <Intro 
            title="THE LUNCH LADY WEBSITE REDESIGN"
            subtitle="Enhancing its digital presence"
            content={[
                "The goal of this project was to simplified the current The Lunch Lady website with better mobile experience.",
                "The current mobile experience for general users can be quite overwhelming, as most content is presented in a cluttered format without clear prioritisation such the menu and images display."
            ]}
            listTitle="What I Did"
            listItems={["HTML", "CSS", "Javascript"]}
            img={{ 
                src: DribbleLunchLady, 
                alt: "The Lunch Lady Dribble Image", 
                id: "dribble-lunchlady" }} 
        />
        <Content
            heading="Brainstorming Process"
            content={[
            "Since this project is mostly focusing on redesigning the usability and interface for Lunch Lady site, the original colour scheme and brand image will be used to maintain the brand consistency while improving the user experience.",
            "The site struggles to present its content with better mobile optimization, for example there’s no map integration linked to its contact page.",
            "I've also impelemented multiple JS plugin for illustrating more animation transition on the home and home page. "
        ]}
        />
        <Video src={VideoLunchLady} />
        <Content 
            heading="Development Building"
            content={["The website was built solely by HTML, CSS and JavaScript languages, with 4-5 JS plugins integrated. For example, the gallery section on MAIN page was redesigned using the Flickity plugin to showcase more images, also adding more interactivity with the users; the SHOP page integrated Scroll Reveal plugin in order to create interactive content with the users.",
            "These plugins were utilised to achieve the user scenario while enhancing user interaction.",
            "Adding responsive features like changing the header image depending the screen size could also improve user experience and maintain the site visual balance."
            ]}
        />
        <div className="text-block">
            <TextBlock 
                heading="Redefining & Launching"
                content="During the re-testing, cross-device checking was done to ensure the mobile and tablet optimization. I have also redesigned the contact form page to make it more cohesive to the brand image."
            />
            <TextBlock 
                heading="Optimising SEO"
                content="During the refinement process, I optimized the site for SEO visibility by applying best practices - such as semantic HTML, image optimisation, meta tags, and a more sturctured data. This is used to improve the search visibility and website performace."
            />
        </div>
        <Upcoming 
            projects={[
                {
                    img:{
                        src: DribblePetApp, 
                        alt:"The Pet Dating App Dribble Image", id:"dribble-petdating"
                    },
                    subtitle:"Pet Dating App",
                    content:"A community where every dog finds a friend.",
                    path:"/work/pet-app",
                },
                {
                    img:{
                        src: DribbleGiveWise, 
                        alt:"GiveWise Dribble Image", id:"dribble-givewise"
                    },
                    subtitle:"GiveWise Budgeting App",
                    content:"Smart budgeting, seamless giving.",
                    path:"/work/givewise",
                }
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
                    <Link to="/work/pet-app">Pet Dating App</Link>
                </div>
            <Line width={500} color="#F6F2EC" />
        </div>
        </>
    )
}