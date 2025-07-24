import React from "react";
import { Helmet } from "react-helmet";
import { Link } from 'react-router';
import ScrollToTop from "react-scroll-to-top";
import '../../../src/main.css'

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
import FederalCurrent1 from '../../assets/images/the-federal-store/previous-1.jpg'
import FederalCurrent2 from '../../assets/images/the-federal-store/previous-2.jpg'
import FederalCurrent3 from '../../assets/images/the-federal-store/previous-3.jpg'
import FederalCurrent4 from '../../assets/images/the-federal-store/previous-4.jpg'
import FederalCurrent5 from '../../assets/images/the-federal-store/previous-5.jpg'
import FederalUserFlow from '../../assets/images/the-federal-store/user-flow.jpg'
import FederalSiteMap from '../../assets/images/the-federal-store/site-map.jpg'
import FederalLowFi1 from '../../assets/images/the-federal-store/low-fi-1.png'
import FederalLowFi2 from '../../assets/images/the-federal-store/low-fi-2.png'
import FederalLowFi3 from '../../assets/images/the-federal-store/low-fi-3.png'

export default function FederalStore(){
    return(
        <>
        <Helmet>
            <title>Federal Store Mobile Redesign Project | Zoey Huang's Portfolio</title>
            <meta 
                name="description" 
                content="A case study in refining digital charm. Explore the thoughtful UX/UI redesign of Vancouver based cafe - The Federal Store's mobile site, a project focused on translating the warmth of a beloved Vancouver café into a seamless and intuitive ordering experience." 
            />
            <meta property="og:title" content="Federal Store Mobile Redesign Project | A UX Case Study by Zoey Huang" />
            <meta property="og:description" content="Translating the warmth of a beloved Vancouver café - The Federal Store into a seamless digital experience. Explore the case study." />
            <meta property="og:image" content={DribbleFederal} /> 
            <meta property="og:url" content="https://www.itszoeyhuang.com/work/federal-store-redesign" />
            <link rel="canonical" href="https://www.itszoeyhuang.com/work/federal-store-redesign" />
        </Helmet>
        <div className="container">
            <Intro 
                title="FEDERAL STORE MOBILE REDESIGN"
                subtitle="Refining users' mobile ordering experience."
                content={[
                    "The mobile app redesign mockup project for the Vancouver based cafe is mainly to enhance user’s mobile ordering experience, also generating more online sales for the café.",
                    "Started by identifying the challenges for the store mobile experience, the site struggles with limited mobile optimisation such as unclear categorisation leading customers facing difficulty in getting the pastries overview and ordering."
                ]}
                listTitle="What I Did"
                listItems={["Figma", "HTML", "CSS", "Javascript"]}
                roleTitle="Role"
                roleItems={["UX/UI Designer"]}
                durationTitle="Duration"
                durationItems={["3 weeks"]}
                img={{ 
                    src: DribbleFederal, 
                    alt: "The Federal Store Dribble Image", 
                    id: "dribble-federal" }} 
                />
                <Content
                    heading="Project Overview"
                    content={[
                        "The Federal Store is a beloved local café in Vancouver known for its daily handmade pastries and warm community vibe. However, its mobile site did not reflect this charm and lacked the usability modern users expect—especially for mobile ordering.",
                        "This redesign aimed to improve the mobile user experience and ultimately increase online orders by enhancing clarity, reducing friction, and making the site more engaging."
                    ]}
                />
                <div className="text-block">
                    <TextBlock
                        heading="Challenge"
                        content={["The Federal Store’s website faces several challenges, including unclear information about product details and delivery/pickup options, and a complex checkout process that may lead to user frustration.","Additionally, the site struggles with outdated design, limited mobile optimisation, and missing real-time updates on product availability which are the main goal of redesigning. These issues surely limited user engagement features and potentially impacting customer satisfaction."]}
                    />
                    <p>Screenshots of Original Mobile Ordering Site</p>
                    <Wireframes
                    images={[
                        { src: FederalCurrent1, alt:"The Federal Store Current Site",caption: "Home Page"},
                        { src: FederalCurrent2, alt:"The Federal Store Current Site",caption: "Product Category"},
                        { src: FederalCurrent3, alt:"The Federal Store Current Site",caption: "Product Detail"},
                        { src: FederalCurrent4, alt:"The Federal Store Current Site",caption: "Following Content"},
                        { src: FederalCurrent5, alt:"The Federal Store Current Site",caption: "Cart"},
                    ]}
                />
                </div>
                <Content
                    heading="Information Architecture & User Flow"
                    content={[
                        "To effectively represent the cake categorisation and better information architecture, I have created an user flow that illustrates how customers would like to purchase the pastry. By understanding the goal, a clear revised sitemap was made."
                    ]}
                />
                <p>User Flow & Site Map</p>
                <Wireframes
                    images={[
                        { src: FederalUserFlow, alt:"The Federal Store User Flow",id:"federal-user-flow"},
                        { src: FederalSiteMap, alt:"The Federal Store Site Map",id:"federal-site-map"}
                    ]}
                />
                <Content
                    heading="Wireframe & Prototype Creating"
                    content={[
                        "The low fidelity wireframes and prototypes were created using insights from user study and researches with Figma",
                        "Started with the lo-fi wireframes, the mobile redesigns aims to focus on the categorisation of cakes and enhance the product info page with better infographics and icons.",
                        "The redesign shows clear cake categorisation by flavours with filter option implemented, also enhanced with icons and infographics. The wireframes aim to reduce excessive scrolling and actions like adding item to the cart etc."
                    ]}
                />
                <p>Low-fidelity Wireframes</p>
                <Wireframes 
                    images={[
                        { src: FederalLowFi1, alt:"The Federal Store Low Fi Wireframe",id:"federal-lowfi-1"},
                        { src: FederalLowFi2, alt:"The Federal Store Low Fi Wireframe",id:"federal-lowfi-2"},
                        { src: FederalLowFi3, alt:"The Federal Store Low Fi Wireframe",id:"federal-lowfi-3"},
                    ]}
                />
                <p>Hi-fidelity Wireframes</p>
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
                    <TextBlock 
                        heading="Solutions"
                        content={[
                            "#1 - The redesign re-categorise the cakes(i.e. by flavour of the cakes) which makes users to filter and find the products easier and meet their preferences without any excessive scrolling",
                            "#2 - Streamelined User Journey - Implemented key actions like adding items to the bag and proceeding to checkout are more user intuitive.",
                            "Lastly, The filter options was also introduced to enhance product discovery which reduce excessive scrolling by presenting key products upfront only."
                        ]}
                    />
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
            </div>
        </>
    )
}