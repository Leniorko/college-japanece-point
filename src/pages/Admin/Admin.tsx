import NavigationBarComponent from "../../components/NavigationBar/NavigationBar";
import "./Admin.css";

export default function AdminPage() {
  return (
    <div className="admin-page">
      <NavigationBarComponent />
      <div className="admin-page__content">
        <button>Delete game</button>
        <button>Add game</button>
      </div>
    </div>
  );
}
