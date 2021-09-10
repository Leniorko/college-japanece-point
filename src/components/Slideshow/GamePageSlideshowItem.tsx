import "./GamePageSlideshowItem.css";
import GamePageSlideshowItemYoutubeComponent from "./GamePageSlideshowItemYoutube";

interface SlideProps {
  isVideo: boolean;
  gameName: string;
  active: string;
}

export default function GamePageSlideshowItemComponent(props: SlideProps) {
  return (
    <div className={props.gameName === props.active ? "slide" : "notCurrent"}>
      {props.isVideo ? (
        <GamePageSlideshowItemYoutubeComponent video={props.gameName} />
      ) : (
        <img src={props.gameName} alt={props.gameName + " Screenshot"}></img>
      )}
    </div>
  );
}
