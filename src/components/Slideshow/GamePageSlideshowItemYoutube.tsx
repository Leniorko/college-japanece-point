import "./GamePageSlideshowItemYoutube.css";

interface SlideshowYoutubeProps {
  video: string;
}

export default function GamePageSlideshowItemYoutubeComponent(
  props: SlideshowYoutubeProps
) {
  return (
    <iframe
      className="youtube-iframe-slideshow"
      src={props.video}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
}
