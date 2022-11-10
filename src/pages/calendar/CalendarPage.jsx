import MyCalendar from "../../components/calendar/MyCalendar";
import TopBar from "../../components/top_bar/TopBar";

const CalendarPage = () => {
  return (
    <div className="flex_column">
      <TopBar title={"달력"} />
      <MyCalendar />
    </div>
  );
};

export default CalendarPage;
