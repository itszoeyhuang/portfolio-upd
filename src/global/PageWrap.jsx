import { Outlet } from "react-router"

import Header from "./Header"
import Footer from "./Footer"


export default function PageWrap(){
    return(
        <>
        <Header />
        <main className="page-content">
            <Outlet />
        </main>
        <Footer />
        </>
    )
}