import { Calendar } from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import './my_calendar.css';
const MyCalendar = ({ calendarDate, setCalendarDate }) => {
  console.log(calendarDate);
  return (
    <Calendar onChange={setCalendarDate} value={calendarDate} />
  );
}
 
export default MyCalendar;