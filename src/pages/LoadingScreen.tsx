import "./LoadingScreen.css";

export default function LoadingScreenPage() {
  return (
    <div className="banner-container">
      <div className="banner">
        <div className="banner__top">
          <p className="banner__text banner__top1">JAPANESE POINT</p>
          <p className="banner__text banner__top2">JAPANESE POINT</p>
          <p className="banner__text banner__top3">JAPANESE POINT</p>
          <p className="banner__text banner__top4">JAPANESE POINT</p>
          <p className="banner__text banner__top5">JAPANESE POINT</p>
        </div>
        <div className="banner__midle">
          <img
            src={process.env.PUBLIC_URL + "/resources/loading_cube.png"}
            className="banner__cube-img"
            alt=""
          />
          <p className="banner__text banner__midle-text">
            JAPANESE POINT JAPANESE POINT JAPANESE POINT JAPANESE POINT JAPANESE
            POINT
          </p>
        </div>
        <div className="banner__bottom">
          <p className="banner__text banner__bottom5">JAPANESE POINT</p>
          <p className="banner__text banner__bottom4">JAPANESE POINT</p>
          <p className="banner__text banner__bottom3">JAPANESE POINT</p>
          <p className="banner__text banner__bottom2">JAPANESE POINT</p>
          <p className="banner__text banner__bottom1">JAPANESE POINT</p>
        </div>
      </div>
    </div>
  );
}
