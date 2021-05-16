export default function GameCardComponent() {
  return (
    <div className="game-card">
      <div className="img-container">
        <img src={process.env.PUBLIC_URL + "/placeholder_200x250.png"} alt="" />
      </div>
      <div>Game Name</div>
      <div className="image-description">Some description</div>
      <div className="price-container">
        <div className="old-price"></div>
        <div className="new-price"></div>
      </div>
    </div>
  );
}
