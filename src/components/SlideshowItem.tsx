import "./SlideshowItem.css";

interface SlideProps {
  gameName: string;
  active: string;
}

export default function SlideshowItemComponent(props: SlideProps) {
  return (
    <div className={props.gameName === props.active ? "slide" : "notCurrent"}>
      <img
        src={process.env.PUBLIC_URL + "/resources/placeholder_1200x700.png"}
        alt=""
      />
      <p className="game-name">{props.gameName}</p>
      <p className="game-description">Placeholder game description</p>
    </div>
  );
}
