import NavigationBarComponent from "../components/NavigationBar/NavigationBar";
import "./Profile.css";

export default function ProfilePage() {
  return (
    <div className="profile-page">
      <NavigationBarComponent />
      {/* TODO Split into components */}
      <div className="profile-page__flex-container">
        <div className="profile-page__container">
          <div className="profile-page__main">
            <img
              src={process.env.PUBLIC_URL + "/resources/placeholder_user.jpg"}
              alt=""
              className="profile-page__avatar"
            />
            <p className="profile-page__username">Example_Username</p>
          </div>
          <div className="profile-page__data">
            <label htmlFor="email">Your email:</label>
            <input
              type="email"
              name="email"
              id=""
              value="example@example.com"
              disabled
            />

            <h2 className="profile-page__password-heading">Change password</h2>
            <label htmlFor="profile-page__password">Your old password:</label>
            <input
              type="password"
              name="profile-page__password"
              placeholder="Enter old password"
              id=""
              className="profile-page__password"
            />
            <label htmlFor="profile-page__password-new">
              Your new password:
            </label>
            <input
              type="password"
              placeholder="Enter new password"
              name=""
              id=""
              className="profile-page__password-new"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
