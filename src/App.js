import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import SchedulePage from './pages/schedule/SchedulePage';
import { useState } from 'react';
import AddSchedule from './components/add_schedule/AddSchedule';
import Header from './components/header/Header';
import CalendarPage from './pages/calendar/CalendarPage';
function App() {
  const [isAddScheduleModalOn, setIsAddScheduleModalOn] = useState(false);
  const [calendarDate, setCalendarDate] = useState(new Date());
  const [scheduleList, setScheduleList] = useState([{id: -1}])
  return (
    <>
      <div className='my_container'>
        <Header setIsAddScheduleModalOn={setIsAddScheduleModalOn} />
        <Routes>
          <Route path='/' element={<Home scheduleList={scheduleList} />}></Route>
          <Route path='/schedule' element={<SchedulePage/>}></Route>
          <Route path='/calendar' element={<CalendarPage calendarDate={calendarDate} setCalendarDate={setCalendarDate} />}></Route>
        </Routes>
      </div>
      {isAddScheduleModalOn ? <AddSchedule setIsAddScheduleModalOn={setIsAddScheduleModalOn} setScheduleList={setScheduleList} scheduleList={scheduleList} /> : null}
    </>
  );
}

export default App;
