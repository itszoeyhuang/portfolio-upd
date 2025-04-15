import React from "react";
import ScrollToTop from "react-scroll-to-top";
import DecryptedText from '../component/effects/DecryptedText'
import Line from '../component/Line'
import ProfilePic from '../assets/images/profile-pic.jpg'

import '../main.css'
import '../global/About.css'

export default function About(){
    return(
        <>
        <div className="container">
            <div className="about">
                <div className="about-left">
                    <div className="intro-line">
                        <h2 id='mark1' >“</h2>
                        <h2>
                            <div style={{}}>
                                <DecryptedText
                                text="Hi! I'm Zoey!"
                                speed={60}
                                maxIterations={10}
                                characters="ABCDEFGHIJKLMNOPQRSTUV123567890!@#$%^&*()_+<>?:\]["
                                animateOn="view"
                                revealDirection="start"
                                parentClassName="all-letters"
                                encryptedClassName="encrypted"
                                sequential="false"
                                />
                            </div>
                        </h2>
                        <h2 id='mark2' >“</h2>
                    </div>
                    <img className='profile-pic' src={ ProfilePic } alt="Zoey Huang Profile Picture" id='profile' />
                </div>
                <div className="mobile-only">
                    <Line width={500} color="#F6F2EC" />
                        <div className="mobile-only_content">
                            <a href="mailto:itszoeyhuang@gmail.com">
                                <h6>EMAIL</h6>
                            </a>
                            <a href="https://drive.google.com/file/d/1cnI12W-kf_K7r_cZZ3B5WXGCy2FOweV-/view?usp=sharing">
                                <h6>RESUME</h6>
                            </a>
                        </div>
                    <Line width={500} color="#F6F2EC" />
                </div>
                <div className="about-right">
                    <div className="col-9">
                        <div className="heading">
                            <h1>
                                <div style={{}}>
                                    <DecryptedText
                                    text="ABOUT ME"
                                    speed={60}
                                    maxIterations={10}
                                    characters="ABCDEFGHIJKLMNOPQRSTUV123567890"
                                    animateOn="view"
                                    revealDirection="start"
                                    parentClassName="all-letters"
                                    encryptedClassName="encrypted"
                                    sequential="false"
                                    />
                                </div>
                            </h1>
                        </div>
                        <div className="content">
                            <p>Hello! Originally from Taiwan, currently based in Vancouver, B.C. I have always been drawn to creative aesthetics since I was a kid, which sparked my interest to design digitally and led me to pursue becoming a front-end developer.</p>
                            <br />
                            <p>I discovered that designing and creating websites brings me a sense of peace, allowing me to immerse myself in a space that feels truly my own.</p>
                            <br />
                            <p>A indoor plant collector and crazy in love with my 15 year old Maltese. 🐶</p>
                        </div>
                        <div className="heading">
                            <h1>
                            <div style={{}}>
                                <DecryptedText
                                text="EXPERIENCE"
                                speed={60}
                                maxIterations={10}
                                characters="ABCDEFGHIJKLMNOPQRSTUV123567890"
                                animateOn="view"
                                revealDirection="start"
                                parentClassName="all-letters"
                                encryptedClassName="encrypted"
                                sequential="false"
                                />
                                </div>
                            </h1>
                        </div>
                        <div className="content">
                            <p>Coming from a multicultural background, I’m fluent in English, Mandarin, and Taiwanese. My passion for creativity and fashion led me to study fashion in Melbourne, Australia, and later pursue a career in retail and merchandising over the past few years.</p>
                            <br />
                            <p>Additionally, I gained valuable insights into consumer behaviour and visual storytelling which deepened my understanding of how aesthetics and functionality intersect.  This inspired me to focus on creating engaging user experience through tech-world.</p>
                        </div>
                        <div className="heading">
                            <h1>
                                <div style={{}}>
                                    <DecryptedText
                                    text="TOOL KITS"
                                    speed={60}
                                    maxIterations={10}
                                    characters="ABCDEFGHIJKLMNOPQRSTUV123567890"
                                    animateOn="view"
                                    revealDirection="start"
                                    parentClassName="all-letters"
                                    encryptedClassName="encrypted"
                                    sequential="false"
                                    />
                                </div>
                            </h1>
                        </div>
                        <div className="content">
                            <h6>Programming Language</h6> 
                            <p>HTML, CSS, Javascript, ReactJs, TailwindCSS, WordPress</p>
                            <br />
                            <h6>Visual Design</h6>
                            <p>Photoshop, Illustrator, InDesign, After Effect, Dimension</p>
                            <br />
                            <h6>User Design</h6>
                            <p>Figma</p>
                            <br />
                            <h6>Productivity Software</h6>
                            <p>Microsoft Word, Excel, Powerpoint</p>
                        </div>
                        <br />
                        {/* Buttons */}
                        <div className="about-btn">
                            <button className="btn">
                                <button className="email">
                                <a href="mailto:itszoeyhuang@gmail.com">
                                    <h6>EMAIL</h6>
                                </a>
                                </button>
                            </button>
                            <button className="btn">
                                <button className="resume">
                                    <a href="https://drive.google.com/file/d/1cnI12W-kf_K7r_cZZ3B5WXGCy2FOweV-/view?usp=sharing">
                                        <h6>RESUME</h6>
                                    </a>
                                </button>
                            </button>
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