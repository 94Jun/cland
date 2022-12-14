import "./main.css";
import ScheduleCard from "./ScheduleCard";
import { useSelector } from "react-redux";
import Memo from "../memo/Memo";
const Main = () => {
  const scheduleList = useSelector((state) => {
    return state.schedule.scheduleList;
  });
  const stickerList = useSelector((state) => {
    return state.sticker.stickerList;
  });
  const now = new Date();

  const todaySchedule =
    scheduleList.length > 0 && scheduleList[0].title
      ? scheduleList.filter((item) => {
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
          const today = parseInt(
            now.getFullYear() +
              "" +
              (now.getMonth() + 1 < 10
                ? "0" + now.getMonth() + 1
                : now.getMonth() + 1 + "") +
              (now.getDate() < 10 ? "0" + now.getDate() : now.getDate() + "")
          );
          return today >= start && today <= end;
        })
      : null;
  const tommorowSchedule =
    scheduleList.length > 0 && scheduleList[0].title
      ? scheduleList.filter((item) => {
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
          const tommorow = parseInt(
            now.getFullYear() +
              "" +
              (now.getMonth() + 1 < 10
                ? "0" + now.getMonth() + 1
                : now.getMonth() + 1 + "") +
              (now.getDate() + 1 < 10
                ? "0" + Number(now.getDate() + 1)
                : Number(now.getDate() + 1) + "")
          );
          return tommorow >= start && tommorow <= end;
        })
      : null;
  const markedStickerLength = stickerList.filter((el) => el.isMarked).length;
  return (
    <main className="main">
      <div className="main_card">
        <div className="main_card_top">
          <span className="main_card_title">?????? ??????</span>
          <span className="main_card_quantity">
            {todaySchedule ? todaySchedule.length : 0}???
          </span>
        </div>
        {scheduleList.length > 0 && scheduleList[0].title
          ? scheduleList
              .filter((item) => {
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
                const today = parseInt(
                  now.getFullYear() +
                    "" +
                    (now.getMonth() + 1 < 10
                      ? "0" + now.getMonth() + 1
                      : now.getMonth() + 1 + "") +
                    (now.getDate() < 10
                      ? "0" + now.getDate()
                      : now.getDate() + "")
                );
                return today >= start && today <= end;
              })
              .sort((a, b) => {
                const importanceA = a.importance;
                const importanceB = b.importance;
                if (importanceA < importanceB) return -1;
                if (importanceA > importanceB) return 1;
                return 0;
              })
              .map((item, idx) => {
                return (
                  <ScheduleCard item={item} idx={idx} key={idx + item.title} />
                );
              })
          : null}
      </div>
      <div className="main_card">
        <div className="main_card_top">
          <span className="main_card_title">?????? ??????</span>
          <span className="main_card_quantity">
            {tommorowSchedule ? tommorowSchedule.length : 0}???
          </span>
        </div>
        {scheduleList.length > 0 && scheduleList[0].title
          ? scheduleList
              .filter((item) => {
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
                const tommorow = parseInt(
                  now.getFullYear() +
                    "" +
                    (now.getMonth() + 1 < 10
                      ? "0" + now.getMonth() + 1
                      : now.getMonth() + 1 + "") +
                    (now.getDate() + 1 < 10
                      ? "0" + Number(now.getDate() + 1)
                      : Number(now.getDate() + 1) + "")
                );
                return tommorow >= start && tommorow <= end;
              })
              .sort((a, b) => {
                const importanceA = a.importance;
                const importanceB = b.importance;
                if (importanceA < importanceB) return -1;
                if (importanceA > importanceB) return 1;
                return 0;
              })
              .map((item, idx) => {
                return (
                  <ScheduleCard item={item} idx={idx} key={idx + item.title} />
                );
              })
          : null}
      </div>
      <div className="main_card">
        <div className="main_card_top">
          <span className="main_card_title">????????? ??????</span>
          <span className="main_card_quantity">{markedStickerLength}???</span>
        </div>
        {stickerList
          .filter((item) => {
            return item.isMarked;
          })
          .map((item) => {
            return <Memo item={item} />;
          })}
      </div>
    </main>
  );
};

export default Main;
