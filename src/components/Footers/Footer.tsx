import { useLocation } from "react-router";
import "./Footer.css";

export default function FooterComponent() {
  let location = useLocation();

  return location.pathname === "/" || location.pathname === "" ? (
    <div className="footer">
      <div className="footer__form-container">
        <h3 className="footer__heading">Подпишись на рассылку</h3>
        <p className="footer__subheading">будь в курсе новостей</p>
        <input
          type="text"
          className="footer__email-input"
          placeholder="Email"
        />
        <button className="footer__send-btn">Send</button>
      </div>
      <div className="footer__about-container">
        <img
          src={process.env.PUBLIC_URL + "/resources/Logo.svg"}
          alt="Japanese Point"
          className="footer__logo"
        />
        <p className="footer__about-text">
          © 2021, Egorov Ivan, Vernidub Artem
        </p>
      </div>
    </div>
  ) : (
    <div className="footer">
      <div className="footer__about-container">
        <img
          src={process.env.PUBLIC_URL + "/resources/Logo.svg"}
          alt="Japanese Point"
          className="footer__logo"
        />
        <p className="footer__about-text">
          © 2021, Egorov Ivan, Vernidub Artem
        </p>
      </div>
    </div>
  );
}
