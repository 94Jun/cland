import "./top_bar.css";
import SearchIcon from "@mui/icons-material/Search";
import { useState, memo } from "react";
import { LOGIN_MODAL_ON } from "../../modules/modal";
import { useSelector, useDispatch } from "react-redux";

const TopBar = memo(({ title }) => {
  const isLogin = useSelector((state) => {
    return state.login.isLogin;
  });
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");
  const onChangeSearch = (e) => {
    setSearchValue(e.target.value);
  };
  const onClickLoginModalOn = () => {
    dispatch(LOGIN_MODAL_ON());
  };
  return (
    <div className="top_bar_container">
      <div className="top_bar_wrap">
        <h2 className="top_bar_title">{title}</h2>
        <div className="top_bar_user">
          <input
            type="text"
            className="top_bar_search"
            onChange={onChangeSearch}
            value={searchValue}
            placeholder="검색할 내용을 입력하세요."
          ></input>
          <SearchIcon></SearchIcon>
          {isLogin ? (
            <div className="top_bar_user_profile">
              <img
                src="img/default_profile.png"
                alt="profile"
                className="user_profile_img"
              ></img>
            </div>
          ) : (
            <div className="nav_item" style={{ marginLeft: "20px" }}>
              <span
                className="item_text"
                onClick={onClickLoginModalOn}
                style={{ cursor: "pointer" }}
              >
                로그인
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
});

export default TopBar;
