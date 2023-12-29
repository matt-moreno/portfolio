import "./Resources.css";
import { Outlet } from "react-router-dom";

export default function Resources() {
  return (
    <div>
      <h1>
        Book Recommendations, Movie Recommendations, Website References, YouTube
        Videos
      </h1>
      <Outlet />
    </div>
  );
}
