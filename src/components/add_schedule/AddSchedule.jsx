import "./add_schedule.css";
import { useState } from "react";
import { useEffect } from "react";
import AddScheduleDate from "./AddScheduleDate";
import { useSelector, useDispatch } from "react-redux";
import { SCHEDULE_MODAL_OFF } from "../../modules/modal";
import { RESET_MODIFY_ITEM } from "../../modules/modify";
import { SET_SCHEDULE_LIST, ADD_SCHEDULE_LIST } from "../../modules/schedule";

const AddSchedule = () => {
  const isModifyOn = useSelector((state) => {
    return state.modal.isModifyOn;
  });
  const modifyItem = useSelector((state) => {
    return state.modify.modifyItem;
  });
  const scheduleList = useSelector((state) => {
    return state.schedule.scheduleList;
  });

  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState({});
  const [endDate, setEndDate] = useState({});
  const now = new Date();

  const [scheduleTitle, setScheduleTitle] = useState("");
  const [scheduleContent, setScheduleContent] = useState("");
  const [scheduleImportance, setScheduleImportance] = useState("중");

  const onChangeSchedule = (e) => {
    if (e.target.id === "schedule_title") {
      setScheduleTitle(e.target.value);
    } else if (e.target.id === "schedule_content") {
      setScheduleContent(e.target.value);
    }
  };
  useEffect(() => {
    setScheduleTitle(modifyItem.title);
    setScheduleContent(modifyItem.content);
    setScheduleImportance(modifyItem.importance);
  }, [isModifyOn]);
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
    dispatch(SCHEDULE_MODAL_OFF());
    dispatch(RESET_MODIFY_ITEM());
  };
  const onChangeImportance = (e) => {
    setScheduleImportance(e.target.value);
  };
  const onSubmitAddSchedule = (e) => {
    e.preventDefault();
    if (isModifyOn) {
      const temp = scheduleList.map((item) => {
        if (item.id === modifyItem.id) {
          return {
            ...item,
            startDate: startDate,
            endDate: endDate,
            title: scheduleTitle,
            content: scheduleContent,
            importance: scheduleImportance,
          };
        } else {
          return item;
        }
      });
      dispatch(SET_SCHEDULE_LIST(temp));
      dispatch(SCHEDULE_MODAL_OFF());
      dispatch(RESET_MODIFY_ITEM());
    } else {
      if (scheduleList[0].id === -1) {
        const temp = [
          {
            id: 0,
            startDate: startDate,
            endDate: endDate,
            title: scheduleTitle,
            content: scheduleContent,
            importance: scheduleImportance,
          },
        ];
        dispatch(SET_SCHEDULE_LIST(temp));
      } else {
        const temp = {
          id: scheduleList.length,
          startDate: startDate,
          endDate: endDate,
          title: scheduleTitle,
          content: scheduleContent,
          importance: scheduleImportance,
        };
        dispatch(ADD_SCHEDULE_LIST(temp));
      }
      dispatch(SCHEDULE_MODAL_OFF());
    }
  };
  return (
    <div className="add_schedule">
      <form className="add_schedule_wrap" onSubmit={onSubmitAddSchedule}>
        <h3 className="add_schedule_title">
          {isModifyOn ? "일정 수정" : "일정 추가"}
        </h3>
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
            className="add_schedule_select"
            onChange={onChangeImportance}
            defaultValue={modifyItem.importance ? modifyItem.importance : "중"}
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
            {isModifyOn ? "수정" : "추가"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddSchedule;
