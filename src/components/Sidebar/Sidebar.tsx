import { NavLink } from "react-router-dom"
import Profile from "../Profile/Profile"
import { FiHome, FiUser, FiCamera, FiMail } from "react-icons/fi"
import "./Sidebar.css"

export default function Sidebar() {
    return (
        <header>
            <Profile />
            <nav>
                <div>
                    <FiHome />
                    <NavLink to="/">Home</NavLink>
                </div>
                <div>
                    <FiUser />
                    <NavLink to="/about">About</NavLink>
                </div>
                <div>
                    <FiCamera />
                    <NavLink to="/photos">Photos</NavLink>
                </div>
                <div>
                    <NavLink to="/runs">Runs</NavLink>
                </div>
                <div>
                    <NavLink to="/recommendations">Recommendations</NavLink>
                </div>
                <div>
                    <FiMail />
                    <NavLink to="/contact">Contact</NavLink>
                </div>
            </nav>
            {/* Sidebar footer goes here */}
        </header>
    )
}