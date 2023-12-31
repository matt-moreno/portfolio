import { Link, Outlet } from "react-router-dom";
import "./Resources.css";

// TODO: CREATE A FILE THAT WILL HOLD ALL THE RESOURCE DATA, THEN MAP OVER IT IN THE COMPONENTS

export default function Resources() {
  return (
    <div>
      <h1>
        Book Recommendations, Movie Recommendations, Website References, YouTube
        Videos
      </h1>
      <nav className="resources-nav">
        <Link to="/resources">Websites</Link>
        <Link to="/resources/videos">Videos</Link>
        <Link to="/resources/books">Books</Link>
      </nav>
      <Outlet />
    </div>
  );
}
