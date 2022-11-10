import { Link } from "react-router-dom";
import { memo } from "react";
import "./set.css";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import { useSelector, useDispatch } from "react-redux";
import { LOGOUT } from "../../modules/login";
const Set = memo(() => {
  const isLogin = useSelector((state) => {
    return state.login.isLogin;
  });
  const dispatch = useDispatch();
  const onClickLogOut = () => {
    dispatch(LOGOUT());
  };
  return (
    <div className="setting">
      <ul>
        <Link to="/setting" style={{ textDecoration: "none" }}>
          <li className="nav_item">
            <SettingsIcon></SettingsIcon>
            <span className="item_text">환경 설정</span>
          </li>
        </Link>
        {isLogin ? (
          <Link to="/" style={{ textDecoration: "none" }}>
            <li className="nav_item" style={{ cursor: "default" }}>
              <LogoutIcon></LogoutIcon>
              <span
                className="item_text"
                onClick={onClickLogOut}
                style={{ cursor: "pointer" }}
              >
                로그아웃
              </span>
            </li>
          </Link>
        ) : (
          <li className="nav_item"></li>
        )}
      </ul>
    </div>
  );
});

export default Set;
