const ScheduleCard = ({ item, setScheduleList, scheduleList }) => {
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
      setScheduleList([{ id: -1 }]);
    } else {
      const temp = scheduleList
        .filter((el) => el.id !== item.id)
        .map((el, idx) => ({ ...el, id: idx }));
      setScheduleList(temp);
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
      setScheduleList(temp);
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
      setScheduleList(temp);
    }
  };
  const onClickModifySchedule = () => {};
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
