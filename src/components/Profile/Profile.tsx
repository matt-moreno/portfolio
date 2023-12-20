import "./Profile.css"
import { Link } from "react-router-dom"
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs"

export default function Profile() {
    return (
        <div>
            <Link to="/">
                <img className="profile-photo" src="src/assets/matt-profile.jpg" />
            </Link>
            <h2 className="name">Matt Moreno</h2>
            <div className="icon-row">
                <Link to="https://www.linkedin.com/in/matthew-moreno-76b58880/" target="_blank">
                    <BsLinkedin className="icon-btn" />
                </Link>
                <Link to="https://github.com/matt-moreno" target="_blank">
                    <BsGithub className="icon-btn"/>
                </Link>
                <Link to="https://www.instagram.com/matt_moreno64/" target="_blank">
                    <BsInstagram className="icon-btn" />
                </Link>
            </div>
        </div>
    )
}