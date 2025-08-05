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
          <div
            key={index}
            className="menu__item"
            onMouseEnter={() => handleExpand(index)}
          >
            <a className="menu__item-link" href={project.link}>{project.text}</a>

            <div className="project-description">
              <div className="project-description-content">
                <div className="project-description-text">
                  <h4>{project.role}</h4> 
                  <p>{project.description}</p>
                </div>
                {/* ✅ 確保圖片區塊是存在的 */}
                <div className="project-description-image">
                  <img src={project.image} alt={project.text} />
                </div>
              </div>
            </div>

            {/* ✅ 跑馬燈的整個 div 已經被刪除 */}
            
          </div>
        ))}
      </div>
    </div>
  );
}

// import React, { useRef } from 'react';
// import { gsap } from 'gsap';
// import './FlowingMenu.css';

// import DribbleFederal from '../assets/images/the-federal-store/dribble.png';
// import IntroLunchLady from '../assets/images/the-lunch-lady/intro.jpg';
// import DribblePetApp from '../assets/images/pet-app/dribble.jpg';
// import DribbleGiveWise from '../assets/images/givewise/dribble.png';

// const demoItems = [
//   { 
//     link: '/work/federal-store-redesign', 
//     text: 'Federal Store Redesign', 
//     image: DribbleFederal, 
//     role: 'UI/UX Designer',
//     description: 'Redesigning the ordering experience for a vintage-inspired café with responsive UI.' 
//   },
//   { link: '/work/the-lunch-lady', 
//     text: 'Lunch Lady Redesign', 
//     image: IntroLunchLady, 
//     role: 'Front-end Developer',
//     description: 'Revamping the Lunch Lady platform with a fresh mobile-first UX flow.' 
//   },
//   { link: '/work/pet-app', 
//     text: 'Pet Dating App', 
//     image: DribblePetApp, 
//     role: 'UI/UX Designer',
//     description: 'Building a playful dating experience for pet owners using UX principles.' 
//   },
//   { link: '/work/givewise', 
//     text: 'GiveWise - Budget Tracking App', 
//     image: DribbleGiveWise, 
//     role: 'UI/UX Designer',
//     description: 'Empowering donation planning with a clean and user-centric budget tracker.' 
//   }
// ];

// export default function FlowingMenu() {
//   const menuRef = useRef();

//   const handleExpand = (index) => {
//     const items = menuRef.current.querySelectorAll('.menu__item');
//     items.forEach((item, i) => {
//       const descriptionElement = item.querySelector('.project-description');

//       if (i === index) {
//         item.classList.add('expanded');
//         gsap.to(descriptionElement, {
//           autoAlpha: 1,
//           x: 0,
//           duration: 0.5,
//           ease: 'power2.out'
//         });
//       } else {
//         item.classList.remove('expanded');
//         gsap.to(descriptionElement, {
//           autoAlpha: 0,
//           x: -30,
//           duration: 0.4,
//           ease: 'power2.in',
//         });
//       }
//     });
//   };

//   const handleCollapse = () => {
//     const items = menuRef.current.querySelectorAll('.menu__item');
//     items.forEach((item) => {
//       item.classList.remove('expanded');
//       const description = item.querySelector('.project-description');
//       gsap.to(description, {
//         autoAlpha: 0,
//         x: -30,
//         duration: 0.4,
//         ease: 'power2.in',
//       });
//     });
//   };

//   return (
//     <div className="menu-wrap" ref={menuRef} onMouseLeave={handleCollapse}>
//       <div className="menu">
//         {demoItems.map((project, index) => (
//           <div
//             key={index}
//             className="menu__item"
//             onMouseEnter={() => handleExpand(index)}
//           >
//             <a className="menu__item-link" href={project.link}>{project.text}</a>

//             <div className="project-description">
//               <div className="project-description-content">
//                 <div className="project-description-text">
//                   <h4>{project.role}</h4> 
//                   <p>{project.description}</p>
//                 </div>
//                 <div className="project-description-image">
//                   <img src={project.image} alt={project.text} />
//                 </div>
//               </div>
//             </div>

//             <div className="marquee">
//               <div className="marquee__inner-wrap">
//                 <div className="marquee__inner">
//                   <span>{project.text} ✺ {project.text} ✺ {project.text}</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }



// import React from 'react';
// import { useRef } from 'react';
// import { Link } from 'react-router';
// import { gsap } from 'gsap';
// import { Flip } from 'gsap/Flip';
// import '../component/FlowingMenu.css'
// gsap.registerPlugin(Flip);

// import DribbleFederal from '../assets/images/the-federal-store/dribble.png';
// import IntroLunchLady from '../assets/images/the-lunch-lady/intro.jpg';
// import DribblePetApp from '../assets/images/pet-app/dribble.jpg';
// import DribbleGiveWise from '../assets/images/givewise/dribble.png';

// const demoItems = [
//   { link: '/work/federal-store-redesign', text: 'Federal Store Redesign', image: DribbleFederal, description: 'Redesigning the ordering experience for a vintage-inspired café with responsive UI.' },
//   { link: '/work/the-lunch-lady', text: 'Lunch Lady Redesign', image: IntroLunchLady, description: 'Revamping the Lunch Lady platform with a fresh mobile-first UX flow.' },
//   { link: '/work/pet-app', text: 'Pet Dating App', image: DribblePetApp, description: 'Building a playful dating experience for pet owners using UX principles.' },
//   { link: '/work/givewise', text: 'GiveWise - Budget Tracking App', image: DribbleGiveWise, description: 'Empowering donation planning with a clean and user-centric budget tracker.' }
// ];

// export default function FlowingMenu() {
//   const menuRef = useRef();

//   const handleExpand = (index) => {
//     const menu = menuRef.current;
//     const items = menu.querySelectorAll('.menu__item');
//     const state = Flip.getState(items);

//     items.forEach((item, i) => {
//       if (i === index) item.classList.add('expanded');
//       else item.classList.remove('expanded');
//     });

//     Flip.from(state, {
//       duration: 0.7,
//       ease: 'power2.inOut',
//       absolute: true,
//       onEnter: (el) => gsap.fromTo(
//         el.querySelector('.project-description'),
//         { opacity: 0, x: -30 },
//         { opacity: 1, x: 0, duration: 0.5, ease: 'power2.out' }
//       )
//     });
//   };

//   const handleCollapse = () => {
//     const menu = menuRef.current;
//     const items = menu.querySelectorAll('.menu__item');
//     const state = Flip.getState(items);

//     items.forEach((item) => item.classList.remove('expanded'));

//     Flip.from(state, {
//       duration: 0.5,
//       ease: 'power2.inOut',
//       absolute: true
//     });
//   };

//   return (
//     <div className="menu-wrap" ref={menuRef}>
//       <div className="menu">
//         {demoItems.map((project, index) => (
//           <div
//             key={index}
//             className="menu__item"
//             onMouseEnter={() => handleExpand(index)}
//             onMouseLeave={handleCollapse}
//           >
//             <a className="menu__item-link" href={project.link}>{project.text}</a>

//             <div className="project-description">
//               <div className="project-description-content">
//                 <div className="project-description-text">
//                   <p>{project.description}</p>
//                 </div>
//                 <div className="project-description-image">
//                   <img src={project.image} alt={project.text} />
//                 </div>
//               </div>
//             </div>

//             <div className="marquee">
//               <div className="marquee__inner-wrap">
//                 <div className="marquee__inner">
//                   <span>{project.text} ✺ {project.text} ✺ {project.text}</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// function FlowingMenu({ items = [] }) {
//   return (
//     <div className="menu-wrap">
//       <nav className="menu">
//         {items.map((item, idx) => (
//           <MenuItem key={idx} {...item} />
//         ))}
//       </nav>
//     </div>
//   );
// }

// function MenuItem({ link, text, image }) {
//   const itemRef = React.useRef(null);
//   const marqueeRef = React.useRef(null);
//   const marqueeInnerRef = React.useRef(null);

//   const animationDefaults = { duration: 0.6, ease: 'expo' };

//   const findClosestEdge = (mouseX, mouseY, width, height) => {
//     const topEdgeDist = distMetric(mouseX, mouseY, width / 2, 0);
//     const bottomEdgeDist = distMetric(mouseX, mouseY, width / 2, height);
//     return topEdgeDist < bottomEdgeDist ? 'top' : 'bottom';
//   };

//   const distMetric = (x, y, x2, y2) => {
//     const xDiff = x - x2;
//     const yDiff = y - y2;
//     return xDiff * xDiff + yDiff * yDiff;
//   };

//   const handleMouseEnter = (ev) => {
//     if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return;
//     const rect = itemRef.current.getBoundingClientRect();
//     const x = ev.clientX - rect.left;
//     const y = ev.clientY - rect.top;
//     const edge = findClosestEdge(x, y, rect.width, rect.height);

//     gsap.timeline({ defaults: animationDefaults })
//       .set(marqueeRef.current, { y: edge === 'top' ? '-101%' : '101%' }, 0)
//       .set(marqueeInnerRef.current, { y: edge === 'top' ? '101%' : '-101%' }, 0)
//       .to([marqueeRef.current, marqueeInnerRef.current], { y: '0%' }, 0);
//   };

//   const handleMouseLeave = (ev) => {
//     if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return;
//     const rect = itemRef.current.getBoundingClientRect();
//     const x = ev.clientX - rect.left;
//     const y = ev.clientY - rect.top;
//     const edge = findClosestEdge(x, y, rect.width, rect.height);

//     gsap.timeline({ defaults: animationDefaults })
//       .to(marqueeRef.current, { y: edge === 'top' ? '-101%' : '101%' }, 0)
//       .to(marqueeInnerRef.current, { y: edge === 'top' ? '101%' : '-101%' }, 0);
//   };

//   const repeatedMarqueeContent = Array.from({ length: 4 }).map((_, idx) => (
//     <React.Fragment key={idx}>
//       <span>{text}</span>
//       <div
//         className="marquee__img"
//         style={{ backgroundImage: `url(${image})` }}
//       />
//     </React.Fragment>
//   ));

//   return (
//     <div className="menu__item" ref={itemRef}>
//       <Link
//         className="menu__item-link"
//         to={link}
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//       >
//         {text}
//       </Link>
//       <div className="marquee" ref={marqueeRef}>
//         <div className="marquee__inner-wrap" ref={marqueeInnerRef}>
//           <div className="marquee__inner" aria-hidden="true">
//             {repeatedMarqueeContent}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default FlowingMenu;
