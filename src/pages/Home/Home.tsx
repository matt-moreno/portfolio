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
            <div className="home-top">
                <h1>Matt Moreno</h1>
                <h2>I am a <span ref={textSpan}></span></h2>
            </div>
            <div>
                <img className="home-photo" src="src/assets/laptop.jpg" />
            </div>
        </div>
    )
}