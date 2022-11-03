import MyCalendar from "../../components/calendar/MyCalendar";
import TopBar from "../../components/top_bar/TopBar";

const CalendarPage = ({calendarDate,setCalendarDate}) => {
  return (
    <div className="flex_column">
      <TopBar title={'달력'} />
      <MyCalendar calendarDate={calendarDate} setCalendarDate={setCalendarDate} />
    </div>
  );
}
 
export default CalendarPage;