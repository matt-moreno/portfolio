import { Link, NavLink } from "react-router-dom"
import Profile from "../Profile/Profile"
import "./Sidebar.css"

export default function Sidebar() {
    return (
        <header>
            <Link className="site-logo" to="/">
                <Profile />
            </Link>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/photos">Photos</NavLink>
            </nav>
            <Link to="/contact" className="contact-button">
                <button>Contact</button>
            </Link>
        </header>
    )
}