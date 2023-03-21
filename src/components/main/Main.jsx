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
          const startValue = new Date(item.startDate.year, Number(item.startDate.month) - 1, Number(item.startDate.day)).getTime();
          const endValue = new Date(item.endDate.year, Number(item.endDate.month) - 1, item.endDate.day).getTime();
          const todayValue = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
          return startValue <= todayValue && todayValue <= endValue;
        })
      : null;
  const tommorowSchedule =
    scheduleList.length > 0 && scheduleList[0].title
      ? scheduleList.filter((item) => {
          const startValue = new Date(item.startDate.year, Number(item.startDate.month) - 1, Number(item.startDate.day)).getTime();
          const endValue = new Date(item.endDate.year, Number(item.endDate.month) - 1, item.endDate.day).getTime();
          const tommorowValue = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1).getTime();
          return startValue <= tommorowValue && tommorowValue <= endValue;
        })
      : null;
  const markedStickerLength = stickerList.filter((el) => el.isMarked).length;
  return (
    <main className="main">
      <div className="main_card">
        <div className="main_card_top">
          <span className="main_card_title">오늘 일정</span>
          <span className="main_card_quantity">{todaySchedule ? todaySchedule.length : 0}개</span>
        </div>
        {todaySchedule && todaySchedule.length > 0
          ? todaySchedule
              .sort((a, b) => {
                const importanceA = a.importance;
                const importanceB = b.importance;
                if (importanceA < importanceB) return -1;
                if (importanceA > importanceB) return 1;
                return 0;
              })
              .map((item, idx) => {
                return <ScheduleCard item={item} idx={idx} key={idx + item.title} />;
              })
          : null}
      </div>
      <div className="main_card">
        <div className="main_card_top">
          <span className="main_card_title">내일 일정</span>
          <span className="main_card_quantity">{tommorowSchedule ? tommorowSchedule.length : 0}개</span>
        </div>
        {tommorowSchedule && tommorowSchedule.length > 0
          ? tommorowSchedule
              .sort((a, b) => {
                const importanceA = a.importance;
                const importanceB = b.importance;
                if (importanceA < importanceB) return -1;
                if (importanceA > importanceB) return 1;
                return 0;
              })
              .map((item, idx) => {
                return <ScheduleCard item={item} idx={idx} key={idx + item.title} />;
              })
          : null}
      </div>
      <div className="main_card">
        <div className="main_card_top">
          <span className="main_card_title">고정된 메모</span>
          <span className="main_card_quantity">{markedStickerLength}개</span>
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
