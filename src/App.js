import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import SchedulePage from "./pages/schedule/SchedulePage";
import { useEffect } from "react";
import AddSchedule from "./components/add_schedule/AddSchedule";
import Header from "./components/header/Header";
import CalendarPage from "./pages/calendar/CalendarPage";
import MemoPage from "./pages/memo/MemoPage";
import LoginModal from "./components/login/LoginModal";
import { useSelector } from "react-redux";

function App() {
  const isLoginModalOn = useSelector((state) => {
    return state.modal.isLoginModalOn;
  });
  const isAddScheduleModalOn = useSelector((state) => {
    return state.modal.isAddScheduleModalOn;
  });
  const scheduleList = useSelector((state) => {
    return state.schedule.scheduleList;
  });
  const stickerList = useSelector((state) => {
    return state.sticker.stickerList;
  });

  useEffect(() => {
    window.localStorage.setItem("scheduleList", JSON.stringify(scheduleList));
  }, [scheduleList]);
  useEffect(() => {
    window.localStorage.setItem("stickerList", JSON.stringify(stickerList));
  }, [stickerList]);

  return (
    <>
      {isLoginModalOn ? <LoginModal /> : null}
      <div className="my_container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/schedule" element={<SchedulePage />}></Route>
          <Route path="/calendar" element={<CalendarPage />}></Route>
          <Route path="/memo" element={<MemoPage />}></Route>
        </Routes>
      </div>
      {isAddScheduleModalOn ? <AddSchedule /> : null}
    </>
  );
}

export default App;
