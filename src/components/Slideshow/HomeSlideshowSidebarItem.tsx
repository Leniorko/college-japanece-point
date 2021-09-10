import "./HomeSlideshowSidebarItem.css";

interface SidebarItemInterface {
  gameName: string;
  activeSlideName: string;
  vertical: Array<string>;
}

export default function HomeSlideshowSidebarItemComponent(
  props: SidebarItemInterface
) {
  return (
    <div className="home-slideshow-sidebar-item">
      <div className="home-slideshow-sidebar-item__content">
        <img
          src={props.vertical[0]}
          alt=""
          className="home-slideshow-sidebar-item__img"
        />
        <p className="home-slideshow-sidebar-item__name">{props.gameName}</p>
      </div>
      <div
        className={
          props.gameName === props.activeSlideName
            ? "home-slideshow-sidebar-item__progressbar-active"
            : "home-slideshow-sidebar-item__progressbar"
        }></div>
    </div>
  );
}
