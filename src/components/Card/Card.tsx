import "./Card.css";

// interface CardTypes {
//   title: string
//   img: string
//   link: string
//   description: string
//   tag: string
// }

// IMG, TITLE, LINK, DESCRIPTION, TAG
// TO GET THE THUMBNAIL IMAGE OF WEBSITE, TRY USING THIS https://stackoverflow.com/questions/7907170/get-thumbnails-of-a-website-from-their-urls
export default function Card() {
  return (
    <div className="card-container">
      <img src="/src/assets/placeholder.jpg" alt="thumbnail image of website" />
      <div className="card-content">
        <div className="card-header">
          <h3>TITLE</h3>
          {/* MAKE TAG CONDITIONAL???? */}
          <div className="card-tag">
            <span>Design</span>
          </div>
        </div>
        <p>This is the description of the website.</p>
      </div>
    </div>
  );
}
