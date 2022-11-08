import "./App.css";
import { Routes, Route, json } from "react-router-dom";
import Home from "./pages/home/Home";
import SchedulePage from "./pages/schedule/SchedulePage";
import { useEffect, useState } from "react";
import AddSchedule from "./components/add_schedule/AddSchedule";
import Header from "./components/header/Header";
import CalendarPage from "./pages/calendar/CalendarPage";
import MemoPage from "./pages/memo/MemoPage";

function App() {
  const jsonScheduleList = JSON.parse(
    window.localStorage.getItem("scheduleList")
  );
  const initialScheduleList =
    jsonScheduleList[0].id !== -1 ? jsonScheduleList : [{ id: -1 }];
  const [isAddScheduleModalOn, setIsAddScheduleModalOn] = useState(false);
  const [calendarDate, setCalendarDate] = useState(new Date());
  const [scheduleList, setScheduleList] = useState(initialScheduleList);
  useEffect(() => {
    window.localStorage.setItem("scheduleList", JSON.stringify(scheduleList));
  }, [scheduleList]);

  return (
    <>
      <div className="my_container">
        <Header setIsAddScheduleModalOn={setIsAddScheduleModalOn} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                scheduleList={scheduleList}
                setScheduleList={setScheduleList}
              />
            }
          ></Route>
          <Route
            path="/schedule"
            element={
              <SchedulePage
                scheduleList={scheduleList}
                setScheduleList={setScheduleList}
              />
            }
          ></Route>
          <Route
            path="/calendar"
            element={
              <CalendarPage
                calendarDate={calendarDate}
                setCalendarDate={setCalendarDate}
              />
            }
          ></Route>
          <Route path="/memo" element={<MemoPage />}></Route>
        </Routes>
      </div>
      {isAddScheduleModalOn ? (
        <AddSchedule
          setIsAddScheduleModalOn={setIsAddScheduleModalOn}
          setScheduleList={setScheduleList}
          scheduleList={scheduleList}
        />
      ) : null}
    </>
  );
}

export default App;
