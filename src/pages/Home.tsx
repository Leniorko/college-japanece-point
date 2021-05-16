import GameCardComponent from "../components/GameCard";
import NavigationBarComponent from "../components/NavigationBar";
import SecondHeadingComponent from "../components/SecondHeading";
import SpotlightSlideshowComponent from "../components/SpotlightSlideshox";

export default function HomePage() {
  return (
    <div className="main-page">
      <NavigationBarComponent />
      <SpotlightSlideshowComponent />
      <SecondHeadingComponent />
      {/* TODO There should be rendering one row of games on sales */}
      <div className="main-page__sales-spotlight-list">
        <GameCardComponent />
      </div>
    </div>
  );
}
