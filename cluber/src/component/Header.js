import { useState } from "react";
import { Link } from "react-router-dom";
import style from "../css/Header.module.css";

export default function Header() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div>
      <div className={`${style.header}`}>
        <div className={`${style.title}`}>Cluber</div>

        <div className={`${style.home_rog}`}>
          <Link to="/" className={`${style.link}`}>
            Home
          </Link>
          <div className={`${style.link}`}>|</div>
          <Link to="/login_page" className={`${style.link}`}>
            {isLogin ? "Logout" : "Login"}
          </Link>
        </div>
      </div>
      <div>
        <hr className={`${style.line}`} />
      </div>
    </div>
  );
}
