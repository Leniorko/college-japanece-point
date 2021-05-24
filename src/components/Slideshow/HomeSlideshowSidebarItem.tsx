import "./HomeSlideshowSidebarItem.css";

interface SidebarItemInterface {
  gameName: string;
  activeSlideName: string;
}

export default function HomeSlideshowSidebarItemComponent(
  props: SidebarItemInterface
) {
  return (
    <div className="home-slideshow-sidebar-item">
      <div className="home-slideshow-sidebar-item__content">
        <img
          src={process.env.PUBLIC_URL + "/resources/placeholder_250x250.png"}
          alt=""
          className="home-slideshow-sidebar-item__img"
        />
        <p className="home-slideshow-sidebar-item__name">{props.gameName}</p>
      </div>
      <div
        className={
          props.gameName == props.activeSlideName
            ? "home-slideshow-sidebar-item__progressbar-active"
            : "home-slideshow-sidebar-item__progressbar"
        }
      ></div>
    </div>
  );
}
