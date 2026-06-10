import { useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <nav className="navbar">

      <div className="logo">
        Nexus<span>CRM 🐦‍🔥</span> 
      </div>

      <button
        className="logout-btn"
        onClick={logout}
      >
        Logout
      </button>

    </nav>
  );
}

export default Navbar;