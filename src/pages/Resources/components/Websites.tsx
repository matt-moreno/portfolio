import Card from "../../../components/Card/Card";

const websiteData = [
  {
    title: "curated.design",
    image: "src/assets/placeholder.jpg",
    link: "https://www.curated.design/",
    description:
      "Web design inspiration catalog. Unleash your creativity with out-of-this-world web design inspiration from across the web",
    tag: "design",
  },
  {
    title: "refero.design",
    image: "src/assets/placeholder.jpg",
    link: "https://www.curated.design/",
    description:
      "With Refero, design inspiration is no more than a click away. Our extensive collection of top-notch web and iOS app designs is as easy to navigate as it is inspiring.",
    tag: "design",
  },
  {
    title: "land-book",
    image: "src/assets/placeholder.jpg",
    link: "https://land-book.com/",
    description:
      "Website design inspiration gallery. Find the best hand-picked website design inspiration. We’re a curated web design gallery for Creatives, updated daily.",
    tag: "design",
  },
];

export default function Websites() {
  return websiteData.map((data, index) => {
    const { title, image, link, description, tag } = data;
    return (
      <Card
        key={index}
        title={title}
        image={image}
        link={link}
        description={description}
        tag={tag}
      />
    );
  });
}
