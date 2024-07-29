import "./Card.css";
import { NavLink } from "react-router-dom";

export interface CardLinkTypes {
  title: string;
  image?: string;
  link: string;
  isWebsite?: boolean;
  description?: string;
  tag?: string;
}

// IMG, TITLE, LINK, DESCRIPTION, TAG
// TO GET THE THUMBNAIL IMAGE OF WEBSITE, TRY USING THIS https://stackoverflow.com/questions/7907170/get-thumbnails-of-a-website-from-their-urls
export function CardLink({
  title,
  image,
  link,
  isWebsite,
  description,
  tag,
}: CardLinkTypes) {
  return (
    <NavLink to={link} target={isWebsite ? "_blank" : ""} className="card-link">
      <div className="card-container">
        <img src={image} alt="thumbnail image of website" />
        <div className="card-content">
          <div className="card-header">
            <h3>{title}</h3>
            {tag && (
              <div className="card-tag">
                <span>{tag}</span>
              </div>
            )}
          </div>
          <p>{description}</p>
        </div>
      </div>
    </NavLink>
  );
}
