import Profile from "../Profile/Profile"
import Footer from "../Footer/Footer"
import Nav from "../Nav/Nav"
import "./Sidebar.css"

export default function Sidebar() {
    return (
        <header>
            <Profile />
            <Nav />
            <Footer />
        </header>
    )
}