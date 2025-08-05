import React, { useRef } from 'react';
import { gsap } from 'gsap';
import './FlowingMenu.css';

import DribbleFederal from '../assets/images/the-federal-store/dribble.png';
import IntroLunchLady from '../assets/images/the-lunch-lady/intro.jpg';
import DribblePetApp from '../assets/images/pet-app/dribble.jpg';
import DribbleGiveWise from '../assets/images/givewise/dribble.png';

const demoItems = [
  { 
    link: '/work/federal-store-redesign', 
    text: 'Federal Store Redesign', 
    image: DribbleFederal, 
    role: 'UI/UX Designer',
    description: 'The goal of the project was to utilise the UI/UX skills and knowledge for a vancouver local café - The Federal Store, especially using Figma covered in UI/UX Strategy I course in term 2. The main purpose of the mockup was to redesign and improve its mobile ordering experience.' 
  },
  { 
    link: '/work/the-lunch-lady', 
    text: 'Lunch Lady Redesign', 
    image: IntroLunchLady, 
    role: 'Front-end Developer',
    description: 'The goal of this project was to simplified the current The Lunch Lady website with better mobile experience. The current mobile experience for general users can be quite overwhelming, as most content is presented in a cluttered format without clear prioritisation such the menu and images display.'
  },
  { 
    link: '/work/pet-app', 
    text: 'Pet Dating App', 
    image: DribblePetApp, 
    role: 'UI/UX Designer',
    description: 'From personal experience to a community platform. This UX/UI case study explores the creation of a pet dating app designed to ease the awkwardness of finding playmates, fostering a safe and friendly community where every dog can find a friend.' 
  },
  { 
    link: '/work/givewise', 
    text: 'GiveWise - Budget Tracking App', 
    image: DribbleGiveWise, 
    role: 'UI/UX Designer',
    description: 'GiveWise is a mobile budgeting app that empowers users to manage expenses, track debt, and stay on top of donation goals—all through a clear, intuitive, and user-centered interface designed to reduce financial stress and encourage mindful giving.'
  }
];

export default function FlowingMenu() {
  const menuRef = useRef();

  const handleExpand = (index) => {
    const items = menuRef.current.querySelectorAll('.menu__item');
    items.forEach((item, i) => {
      const descriptionElement = item.querySelector('.project-description');
      gsap.killTweensOf(descriptionElement);
      if (i === index) {
        item.classList.add('expanded');
        gsap.to(descriptionElement, {
          autoAlpha: 1,
          x: 0,
          duration: 0.3,
          ease: 'bounce.inOut',
          overwrite: 'auto'
        });
      } else {
        item.classList.remove('expanded');
        gsap.to(descriptionElement, {
          autoAlpha: 0,
          x: -30,
          duration: 0.25,
          ease: 'power3.inOut',
          overwrite: 'auto'
        });
      }
    });
  };

  const handleCollapse = () => {
    const items = menuRef.current.querySelectorAll('.menu__item');
    items.forEach((item) => {
      item.classList.remove('expanded');
      const description = item.querySelector('.project-description');
      gsap.killTweensOf(descriptionElement);
      gsap.to(description, {
        autoAlpha: 0,
        x: -30,
        duration: 0.25,
        ease: 'power3.inOut',
        overwrite: 'auto'
      });
    });
  };

  return (
    <div className="menu-wrap" ref={menuRef} onMouseLeave={handleCollapse}>
      <div className="menu">
        {demoItems.map((project, index) => (
          <a
            key={index}
            className="menu__item"
            onMouseEnter={() => handleExpand(index)}
          >
            <span className="menu__item-link" href={project.link}>{project.text}</span>

            <div className="project-description">
              <a href={project.link} style={{ display: 'flex', justifyContent:'center', width: '100%', height: '100%' }}>
                <div className="project-description-content">
                  <div className="project-description-text">
                    <h4>{project.role}</h4> 
                    <p>{project.description}</p>
                  </div>
                  <div className="project-description-image">
                      <img src={project.image} alt={project.text} />
                  </div>
                </div>
              </a>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
