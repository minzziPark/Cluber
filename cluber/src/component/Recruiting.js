import style from "../css/Recruiting.module.css";
import { Link } from "react-router-dom";

export default function Recruiting() {
  return (
    <div>
      <div className={`${style.nav_menu}`}>
        <div className={`${style.menu}`}>
          <Link to="/introclub" className={`${style.detail_menu}`}>
            공동체 소개
          </Link>
          <div className={`${style.detail_menu}`}>|</div>
          <Link
            to="/recruiting"
            className={`${style.detail_menu}`}
            style={{ fontWeight: "bold" }}
          >
            리쿠르팅
          </Link>
        </div>
      </div>
    </div>
  );
}
