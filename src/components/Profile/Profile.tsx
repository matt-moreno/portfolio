import "./Profile.css"
import { Link } from "react-router-dom"
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs"

export default function Profile() {
    return (
        <div>
            <Link to="/">
                <img className="profile-photo" src="src/assets/matt-profile.jpg" />
            </Link>
            <h3>Matt Moreno</h3>
            <div className="icon-row">
                <Link to="https://www.linkedin.com/in/matthew-moreno-76b58880/">
                    <BsLinkedin onClick={() => console.log("linkedin")} />
                </Link>
                <Link to="https://github.com/matt-moreno">
                    <BsGithub onClick={() => console.log("github")}/>
                </Link>
                <Link to="https://www.instagram.com/matt_moreno64/">
                    <BsInstagram onClick={() => console.log("instagram")} />
                </Link>
            </div>
        </div>
    )
}