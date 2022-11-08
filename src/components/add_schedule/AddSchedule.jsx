import "./add_schedule.css";
import { useState } from "react";
import { useEffect } from "react";
import AddScheduleDate from "./AddScheduleDate";

const AddSchedule = ({
  setIsAddScheduleModalOn,
  setScheduleList,
  scheduleList,
}) => {
  const [startDate, setStartDate] = useState({});
  const [endDate, setEndDate] = useState({});
  const now = new Date();

  const [scheduleTitle, setScheduleTitle] = useState("");
  const [scheduleContent, setScheduleContent] = useState("");
  const [scheduleImportance, setScheduleImportance] = useState("");

  const onChangeSchedule = (e) => {
    if (e.target.id === "schedule_title") {
      setScheduleTitle(e.target.value);
    } else if (e.target.id === "schedule_content") {
      setScheduleContent(e.target.value);
    }
  };
  useEffect(() => {
    setScheduleImportance("중");
    setStartDate({
      day: now.getDate(),
      month: now.getMonth() + 1,
      year: now.getFullYear(),
    });
    setEndDate({
      day: now.getDate(),
      month: now.getMonth() + 1,
      year: now.getFullYear(),
    });
  }, [scheduleList]);

  const onClickCloseModal = () => {
    setIsAddScheduleModalOn(false);
  };
  const onChangeImportance = (e) => {
    setScheduleImportance(e.target.value);
  };
  const onSubmitAddSchedule = (e) => {
    e.preventDefault();
    setScheduleList((prev) => {
      if (scheduleList[0].id === -1) {
        return [
          {
            id: 0,
            startDate: startDate,
            endDate: endDate,
            title: scheduleTitle,
            content: scheduleContent,
            importance: scheduleImportance,
          },
        ];
      } else {
        return [
          ...prev,
          {
            id: scheduleList.length,
            startDate: startDate,
            endDate: endDate,
            title: scheduleTitle,
            content: scheduleContent,
            importance: scheduleImportance,
          },
        ];
      }
    });
    setIsAddScheduleModalOn(false);
  };
  return (
    <div className="add_schedule">
      <form className="add_schedule_wrap" onSubmit={onSubmitAddSchedule}>
        <h3 className="add_schedule_title">일정 추가</h3>
        <AddScheduleDate
          now={now}
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
        />
        <div className="add_schedule_select_wrap">
          <p className="add_schedule_select_title">중요도</p>
          <select
            defaultValue="중"
            className="add_schedule_select"
            onChange={onChangeImportance}
          >
            <option value="상">상</option>
            <option value="중">중</option>
            <option vlaue="하">하</option>
          </select>
        </div>
        <div className="add_schedule_select_wrap">
          <p className="add_schedule_select_title">제목</p>
          <input
            type="text"
            onChange={onChangeSchedule}
            value={scheduleTitle}
            className="add_schedule_input"
            id="schedule_title"
          />
        </div>
        <div className="add_schedule_select_wrap">
          <p className="add_schedule_select_title">세부내용</p>
          <input
            type="text"
            onChange={onChangeSchedule}
            value={scheduleContent}
            className="add_schedule_input"
            id="schedule_content"
          />
        </div>
        <div className="add_schedule_btn_wrap">
          <button
            type="button"
            className="add_btn close_btn"
            onClick={onClickCloseModal}
          >
            닫기
          </button>
          <button type="submit" className="add_btn">
            추가
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddSchedule;
