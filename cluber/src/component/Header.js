import { useState } from "react";
import { Link } from "react-router-dom";
import style from "../css/Header.module.css";

export default function Header() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div style={{ style }}>
      <div className={`${style.header}`}>
        <h1 className={`${style.title}`}>Cluber</h1>
        <div>
          <Link to="/">Home</Link>
          <button>{isLogin ? "Logout" : "Login"}</button>
        </div>
      </div>
      <div>
        <hr className={`${style.line}`} />
      </div>
      <div>
        <Link to="/introclub">공동체 소개</Link>
        <Link to="/recruiting">리쿠르팅</Link>
      </div>
    </div>
  );
}
