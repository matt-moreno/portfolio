import { useRef, useEffect } from "react"
import Typed from "typed.js"
import "./Home.css"

export default function Home() {
    const textSpan = useRef(null)

    useEffect(() => {
        const typedText = new Typed(textSpan.current, {
            strings: ["Product Owner", "Web Developer", "QA Tester", "Marathon Runner", "Life Long Learner"],
            typeSpeed: 50,
            backSpeed: 50,
            loop: true
        })

        return () => {
            typedText.destroy()
        }  
    }, [])
    

    return (
        <div className="home-wrapper">

            <div className="hero">
                <div className="home-content">
                    <h1>Matt Moreno</h1>
                    <h2>I am a <span ref={textSpan}></span></h2>
                </div>
                <img className="home-photo" src="src/assets/laptop.jpg" />
            </div>

            <div className="experience">
                <h3>Experience</h3>
                <h4>Dubsado</h4>
                <h5>Product Owner II</h5>
                <p>Since 2022</p>
                <ul>
                    <li>experience bullet point</li>
                    <li>experience bullet point</li>
                    <li>experience bullet point</li>
                    <li>experience bullet point</li>
                    <li>experience bullet point</li>
                </ul>
                <h5>Product Owner I</h5>
                <p>2021-2022</p>
                <ul>
                    <li>experience bullet point</li>
                    <li>experience bullet point</li>
                    <li>experience bullet point</li>
                    <li>experience bullet point</li>
                    <li>experience bullet point</li>
                </ul>
                <h5>Customer Success</h5>
                <p>2020-2021</p>
                <ul>
                    <li>experience bullet point</li>
                    <li>experience bullet point</li>
                    <li>experience bullet point</li>
                    <li>experience bullet point</li>
                    <li>experience bullet point</li>
                </ul>
            </div>

            <div className="education">
                <h3>Education</h3>
                <p>University of California, Riverside</p>
                <p>Certified Scrum Product Owner</p>
                <p>Scrimba certificate</p>
                <p>Cybersecurity certificate</p>
            </div>


        </div>
    )
}