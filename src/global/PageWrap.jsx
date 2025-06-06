import React, { useEffect, useState } from 'react'
import { useLocation } from "react-router-dom";
import { Outlet } from "react-router";

import Header from "./Header";
import Footer from "./Footer";
import '../global/Pagewrap.css'

export default function PageWrap() {
    const location = useLocation();
    const isHome = location.pathname === '/';
    const [atBottom, setAtBottom] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 10;
            setAtBottom(isBottom);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {isHome ? (
                <>

                    <Outlet />           {/* Render Home page content */}
                    <Header />           {/* Header BELOW hero on Home */}
                </>
            ) : (
                <>
                    <Header />           {/* Header on top for all other pages */}
                    <Outlet />
                </>
            )}
            <div className={`page-bottom-blur ${atBottom ? 'hidden' : ''}`} />
            <Footer />
        </>
    );
}