import { Link } from "react-router-dom";
import { memo } from "react";
import "./nav.css";
import AppsIcon from "@mui/icons-material/Apps";
import ListAltIcon from "@mui/icons-material/ListAlt";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import StickyNote2Icon from "@mui/icons-material/StickyNote2";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
const Nav = memo(() => {
  return (
    <nav className="nav">
      <ul>
        <Link to="/" style={{ textDecoration: "none" }}>
          <li className="nav_item">
            <AppsIcon></AppsIcon>
            <span className="item_text">메인</span>
          </li>
        </Link>
        <Link to="/schedule" style={{ textDecoration: "none" }}>
          <li className="nav_item">
            <ListAltIcon></ListAltIcon>
            <span className="item_text">일정 목록</span>
          </li>
        </Link>
        <Link to="/calendar" style={{ textDecoration: "none" }}>
          <li className="nav_item">
            <CalendarMonthIcon></CalendarMonthIcon>
            <span className="item_text">캘린더</span>
          </li>
        </Link>
        <Link to="/memo" style={{ textDecoration: "none" }}>
          <li className="nav_item">
            <StickyNote2Icon></StickyNote2Icon>
            <span className="item_text">메모</span>
          </li>
        </Link>
      </ul>
    </nav>
  );
});

export default Nav;
