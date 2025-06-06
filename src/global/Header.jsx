import React from 'react'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import ThemeToggle from '../component/Toggle'
import { Link } from 'react-router'
import Logo  from '../assets/images/logo-vanilla.png'
import ZoeyLogo from '../assets/images/itszoeyhuang.png'

import '../global/Header.css'
import '../main.css'

export default function Header() {
    const [showHeader, setShowHeader] = useState(true);
    const [lastY, setLastY] = useState(0);

    useEffect(() => {
        const onScroll = () => {
            const currentY = window.scrollY;
            setShowHeader(currentY < lastY || currentY < 100);
            setLastY(currentY);
        };

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, [lastY]);

    return (
        <motion.header
            className='site-header'
            initial={{ y: 0 }}
            animate={{ y: showHeader ? 0 : -100 }}
            transition={{ duration: 0.1, ease: 'linear' }} 
        >
            <div className="container">
                <div className="grid">
                    <div className="col-3" id="home-logos">
                        <Link to="/">
                            <img src={Logo} alt="Home Logo" id="z-logo" />
                        </Link>
                        <Link to="/">
                            <img src={ZoeyLogo} alt="Home Logo" id="zoey-logo" />
                        </Link>
                    </div>
                    <div className="col-9">
                        <ul>
                            <Link to="/about">about</Link>
                            <Link to="/work">work</Link>
                            <ThemeToggle />
                        </ul>
                    </div>
                </div>
            </div>
        </motion.header>
    );
}

// export default function Header(){
//     return(
//         <header className='site-header'>
//             <div className="container">
//                 <div className="grid">
//                     <div className="col-3" id="home-logos" >
//                         <Link to="/">
//                             <img src={Logo} alt="Home Logo" id="z-logo" />
//                         </Link>
//                         <Link to="/">
//                             <img src={ZoeyLogo } alt="Home Logo" id="zoey-logo" />
//                         </Link>
//                     </div>
//                     <div className="col-9">
//                         <ul>
//                             <Link to="/about" >about</Link>
//                             <Link to="/work" >work</Link>
//                             {/* <Link to="/contact" >contact</Link> */}
//                             <ThemeToggle />
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//         </header>
//     )
// }