import { Link, NavLink } from "react-router-dom"
import './Sidebar.css'

export default function Sidebar() {
    return (
        <header>
            <Link className="site-logo" to="/">#MattMoreno</Link>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/photos">Photos</NavLink>
            </nav>
            <Link to="/contact">
                <button>Contact</button>
            </Link>
        </header>
    )
}