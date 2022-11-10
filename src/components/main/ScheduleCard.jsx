import { useSelector, useDispatch } from "react-redux";
import { MODIFY_ON } from "../../modules/modal";
import { SET_MODIFY_ITEM } from "../../modules/modify";
import { RESET_SCHEDULE_LIST, SET_SCHEDULE_LIST } from "../../modules/schedule";

const ScheduleCard = ({ item }) => {
  const scheduleList = useSelector((state) => {
    return state.schedule.scheduleList;
  });
  const dispatch = useDispatch();
  let importanceClass;
  if (item.importance === "상") {
    importanceClass = "importance_high";
  } else if (item.importance === "중") {
    importanceClass = "importance_middle";
  } else if (item.importance === "하") {
    importanceClass = "importance_low";
  }
  const onClickRemoveSchedule = () => {
    if (scheduleList.length === 1) {
      dispatch(RESET_SCHEDULE_LIST());
    } else {
      const temp = scheduleList
        .filter((el) => el.id !== item.id)
        .map((el, idx) => ({ ...el, id: idx }));
      dispatch(SET_SCHEDULE_LIST(temp));
    }
  };
  const onClickToggleSchedule = () => {
    if (item.changeCss === "complete") {
      const temp = scheduleList.map((el) => {
        if (el.id === item.id) {
          return {
            ...el,
            changeCss: "",
          };
        } else {
          return { ...el };
        }
      });
      dispatch(SET_SCHEDULE_LIST(temp));
    } else {
      const temp = scheduleList.map((el) => {
        if (el.id === item.id) {
          return {
            ...el,
            changeCss: "complete",
          };
        } else {
          return { ...el };
        }
      });
      dispatch(SET_SCHEDULE_LIST(temp));
    }
  };
  const onClickModifySchedule = () => {
    if (item.changeCss !== "complete") {
      dispatch(MODIFY_ON());
      dispatch(SET_MODIFY_ITEM(item));
    }
  };
  return (
    <div className={`main_card_item item_margin ${item.changeCss}`}>
      <div className="main_card_item_top">
        <span className="main_card_item_title">{item.title}</span>
        <span className={`main_card_item_importance ${importanceClass}`}>
          {item.importance}
        </span>
      </div>
      <div className="main_card_item_middle min_height">
        <p>{item.content}</p>
      </div>
      <div className="main_card_item_bottom">
        <div>
          {item.startDate.year === item.endDate.year &&
          item.startDate.month === item.endDate.month &&
          item.startDate.day === item.endDate.day ? (
            <span>
              {item.startDate.year}. {item.startDate.month}.{" "}
              {item.startDate.day}.{" "}
            </span>
          ) : (
            <span>
              {item.startDate.year}. {item.startDate.month}.{" "}
              {item.startDate.day}. ~ {item.endDate.year}. {item.endDate.month}.{" "}
              {item.endDate.day}.
            </span>
          )}
        </div>
        <div>
          <button onClick={onClickToggleSchedule}>완료</button>
          <button onClick={onClickModifySchedule}>수정</button>
          <button onClick={onClickRemoveSchedule}>삭제</button>
        </div>
      </div>
    </div>
  );
};
export default ScheduleCard;
