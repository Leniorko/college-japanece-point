import "./HomeSlideshowItem.css";

export default function HomeSlideshowItemComponent() {
  return (
    <div className="home-slideshow-item">
      <img
        src={process.env.PUBLIC_URL + "/resources/placeholder_1200x700.png"}
        alt=""
        className="home-slideshow-item__image"
      />
    </div>
  );
}
