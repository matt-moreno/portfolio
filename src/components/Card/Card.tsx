import "./Card.css";

interface CardTypes {
  title: string;
  image?: string;
  link?: string;
  description?: string;
  tag?: string;
}

// IMG, TITLE, LINK, DESCRIPTION, TAG
// TO GET THE THUMBNAIL IMAGE OF WEBSITE, TRY USING THIS https://stackoverflow.com/questions/7907170/get-thumbnails-of-a-website-from-their-urls
export default function Card({
  title,
  image,
  link,
  description,
  tag,
}: CardTypes) {
  return (
    <a href={link} target="_blank">
      <div className="card-container">
        <img src={image} alt="thumbnail image of website" />
        <div className="card-content">
          <div className="card-header">
            <h3>{title}</h3>
            {/* MAKE TAG CONDITIONAL???? */}
            <div className="card-tag">
              <span>{tag}</span>
            </div>
          </div>
          <p>{description}</p>
        </div>
      </div>
    </a>
  );
}
