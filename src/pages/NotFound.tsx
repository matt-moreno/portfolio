import { Link } from "react-router-dom"

export default function NotFound() {
    return (
        <>
            <h1>Sorry! Couldn't find the page you were looking for.</h1>
            <button>
                <Link to="/">Return home</Link>
            </button>
        </>
    )
}