import "./schedule_list.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";
import ScheduleCard from "../main/ScheduleCard";

const ScheduleList = ({
  setScheduleList,
  scheduleList,
  isModifyOn,
  setIsModifyOn,
  setIsAddScheduleModalOn,
  setModfiyItem,
}) => {
  const now = new Date();
  const today = parseInt(
    now.getFullYear() +
      "" +
      (now.getMonth() + 1 < 10
        ? "0" + now.getMonth() + 1
        : now.getMonth() + 1 + "") +
      (now.getDate() < 10 ? "0" + now.getDate() : now.getDate() + "")
  );
  const [isScheduleListOn, setIsScheduleListOn] = useState({
    prev: false,
    present: true,
    next: false,
  });
  const onClickListToggle = (e) => {
    if (e.target.id === "prev") {
      setIsScheduleListOn({
        ...isScheduleListOn,
        prev: !isScheduleListOn.prev,
      });
    } else if (e.target.id === "present") {
      setIsScheduleListOn({
        ...isScheduleListOn,
        present: !isScheduleListOn.present,
      });
    } else if (e.target.id === "next") {
      setIsScheduleListOn({
        ...isScheduleListOn,
        next: !isScheduleListOn.next,
      });
    }
  };
  return (
    <section className="schedule_list_wrap">
      <div>
        <div className="show_schedule" onClick={onClickListToggle} id="prev">
          <p className="print_toggle_schedule">지난 일정</p>
          <KeyboardArrowDownIcon />
        </div>
        {isScheduleListOn.prev ? (
          <div>
            {scheduleList &&
              scheduleList[0].endDate &&
              scheduleList
                .filter((item, idx) => {
                  const end = parseInt(
                    item.endDate.year +
                      "" +
                      (item.endDate.month < 10
                        ? "0" + item.endDate.month
                        : item.endDate.month + "") +
                      (item.endDate.day < 10
                        ? "0" + item.endDate.day
                        : item.endDate.day + "")
                  );
                  return end < today;
                })
                .map((item, idx) => {
                  return (
                    <ScheduleCard
                      item={item}
                      key={idx}
                      scheduleList={scheduleList}
                      setScheduleList={setScheduleList}
                      isModifyOn={isModifyOn}
                      setIsModifyOn={setIsModifyOn}
                      setIsAddScheduleModalOn={setIsAddScheduleModalOn}
                      setModfiyItem={setModfiyItem}
                    />
                  );
                })}
          </div>
        ) : null}
      </div>
      <div>
        <div className="show_schedule" id="present" onClick={onClickListToggle}>
          <p className="print_toggle_schedule">진행중인 일정</p>
          <KeyboardArrowDownIcon />
        </div>
        {isScheduleListOn.present ? (
          <div>
            {scheduleList &&
              scheduleList[0].endDate &&
              scheduleList
                .filter((item, idx) => {
                  const start = parseInt(
                    item.startDate.year +
                      "" +
                      (item.startDate.month < 10
                        ? "0" + item.startDate.month
                        : item.startDate.month + "") +
                      (item.startDate.day < 10
                        ? "0" + item.startDate.day
                        : item.startDate.day + "")
                  );
                  const end = parseInt(
                    item.endDate.year +
                      "" +
                      (item.endDate.month < 10
                        ? "0" + item.endDate.month
                        : item.endDate.month + "") +
                      (item.endDate.day < 10
                        ? "0" + item.endDate.day
                        : item.endDate.day + "")
                  );
                  return today >= start && today <= end;
                })
                .map((item, idx) => {
                  return (
                    <ScheduleCard
                      item={item}
                      key={idx}
                      scheduleList={scheduleList}
                      setScheduleList={setScheduleList}
                      isModifyOn={isModifyOn}
                      setIsModifyOn={setIsModifyOn}
                      setIsAddScheduleModalOn={setIsAddScheduleModalOn}
                      setModfiyItem={setModfiyItem}
                    />
                  );
                })}
          </div>
        ) : null}
      </div>
      <div>
        <div className="show_schedule" id="next" onClick={onClickListToggle}>
          <p className="print_toggle_schedule">다가오는 일정</p>
          <KeyboardArrowDownIcon />
        </div>
        {isScheduleListOn.next ? (
          <div>
            {scheduleList &&
              scheduleList[0].endDate &&
              scheduleList
                .filter((item, idx) => {
                  const start = parseInt(
                    item.startDate.year +
                      "" +
                      (item.startDate.month < 10
                        ? "0" + item.startDate.month
                        : item.startDate.month + "") +
                      (item.startDate.day < 10
                        ? "0" + item.startDate.day
                        : item.startDate.day + "")
                  );
                  return today < start;
                })
                .map((item, idx) => {
                  return (
                    <ScheduleCard
                      item={item}
                      key={idx}
                      scheduleList={scheduleList}
                      setScheduleList={setScheduleList}
                      isModifyOn={isModifyOn}
                      setIsModifyOn={setIsModifyOn}
                      setIsAddScheduleModalOn={setIsAddScheduleModalOn}
                      setModfiyItem={setModfiyItem}
                    />
                  );
                })}
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default ScheduleList;
