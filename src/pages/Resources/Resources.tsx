import { NavLink, Outlet } from "react-router-dom";
import "./Resources.css";

// TODO: CREATE A FILE THAT WILL HOLD ALL THE RESOURCE DATA, THEN MAP OVER IT IN THE COMPONENTS

export default function Resources() {
  return (
    <div className="resources-wrapper">
      <h1>
        Book Recommendations, Movie Recommendations, Website References, YouTube
        Videos
      </h1>
      <nav className="resources-nav">
        <NavLink
          to="."
          end
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Websites
        </NavLink>
        <NavLink
          to="/resources/videos"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Videos
        </NavLink>
        <NavLink
          to="/resources/books"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Books
        </NavLink>
      </nav>
      <div className="card-grid">
        <Outlet />
      </div>
    </div>
  );
}
