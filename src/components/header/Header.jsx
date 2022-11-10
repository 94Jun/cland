import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { Link } from "react-router-dom";
import "./header.css";
import Nav from "../nav/Nav";
import Set from "../set/Set";
import { useDispatch } from "react-redux";
import { SCHEDULE_MODAL_ON } from "../../modules/modal";
const Header = () => {
  const dispatch = useDispatch();
  const onClickAddScheduleModal = () => {
    dispatch(SCHEDULE_MODAL_ON());
  };
  return (
    <header className="header">
      <div>
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="title_wrap">
            <CalendarTodayIcon className="title_icon" fontSize="large" />
            <h1 className="title">Cland.</h1>
          </div>
        </Link>
        <div className="add_btn_wrap">
          <button className="add_btn" onClick={onClickAddScheduleModal}>
            + 일정 추가
          </button>
        </div>
      </div>
      <Nav />
      <Set />
    </header>
  );
};

export default Header;
