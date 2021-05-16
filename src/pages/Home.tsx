import GameCardComponent from "../components/GameCard";
import NavigationBarComponent from "../components/NavigationBar";
import SecondHeadingComponent from "../components/SecondHeading";
import SpotlightSlideshowComponent from "../components/SpotlightSlideshow";
import "./Home.css";

export default function HomePage() {
  return (
    <div className="main-page">
      <NavigationBarComponent />
      <div className="slideshow-layout">
        <SpotlightSlideshowComponent />
      </div>
      <SecondHeadingComponent headingText="Скидки" />
      {/* TODO There should be rendering one row of games on sales */}
      <div className="main-page__sales-spotlight-list">
        <GameCardComponent />
      </div>
    </div>
  );
}
