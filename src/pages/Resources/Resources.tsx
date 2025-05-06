import { NavLink, Outlet } from "react-router-dom";
import "./Resources.css";

export default function Resources() {
  return (
    <div className="main-wrapper">
      <section className="resources-container">
        <h1>Recommendations</h1>
        <nav className="resources-nav">
          <NavLink to="." end>
            Websites
          </NavLink>
          <NavLink to="/resources/videos">Videos</NavLink>
          <NavLink to="/resources/books">Books</NavLink>
        </nav>
        <div>
          <Outlet />
        </div>
      </section>
    </div>
  );
}
