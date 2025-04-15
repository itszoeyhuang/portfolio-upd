import Dock from "../component/Dock"

import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa"
import { MdOutlineEmail } from "react-icons/md";

import '../main.css'

export default function Footer(){
    const items = [
        {
            icon: <FaLinkedin  size={"18"}/>,
            label: 'LinkedIn',
            onClick: () => alert("Linkedin"),
            onClick: () => window.open("https://www.linkedin.com/in/itszoeyhuang/")
        },
        {
            icon: <FaGithub  size={"18"}/>,
            label: 'GitHub',
            onClick: () => alert("Github"),
            onClick: () => window.open("https://github.com/itszoeyhuang")
        },
        {
            icon: <FaInstagram  size={"18"}/>,
            label: 'Instagram',
            onClick: () => alert("Instagram"),
            onClick: () => window.open("https://www.instagram.com/itszoeyhuang/")
        },
        {
            icon: <MdOutlineEmail  size={"18"}/>,
            label: 'Mail Me!',
            onClick: () => alert("Mail Me!"),
            onClick: () => window.open("mailto:itszoeyhuang@gmail.com")
        },
    ];

    return(
        <footer className="site-footer">
            <Dock 
                items={items}
                panelHeight={68}
                baseItemSize={50}
                magnification={70}
            />
        </footer>
    )
}