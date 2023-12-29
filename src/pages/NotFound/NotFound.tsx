import { Link } from "react-router-dom";
import "./NotFound.css";

export default function NotFound() {
  return (
    <div className="notfound-wrapper">
      <h1>Sorry! Couldn't find the page you were looking for.</h1>
      <button>
        <Link to="/">Return home</Link>
      </button>
    </div>
  );
}
