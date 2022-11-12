import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import SchedulePage from "./pages/schedule/SchedulePage";
import { useEffect } from "react";
import AddSchedule from "./components/add_schedule/AddSchedule";
import Header from "./components/header/Header";
import CalendarPage from "./pages/calendar/CalendarPage";
import MemoPage from "./pages/memo/MemoPage";
import ProjectPage from "./pages/project/ProjectPage";
import LoginModal from "./components/login/LoginModal";
import { useSelector, useDispatch } from "react-redux";
import "./firebase";
import { db } from "./firebase";
import { collection, addDoc, setDoc, doc, getDocs } from "firebase/firestore";
import { SET_STICKER_LIST, RESET_STICKER_LIST } from "./modules/sticker";
import { SET_SCHEDULE_LIST, RESET_SCHEDULE_LIST } from "./modules/schedule";

function App() {
  const dispatch = useDispatch();
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
  const isLogin = useSelector((state) => {
    return state.login.isLogin;
  });
  const currentUser = useSelector((state) => {
    return state.user.currentUser;
  });
  async function setDB(list) {
    await setDoc(doc(db, "user", currentUser?.email), list);
  }
  let userInfo;
  async function getDB() {
    const snapShot = await getDocs(collection(db, "user"));
    snapShot.forEach((doc) => {
      if (doc.id === currentUser?.email) {
        userInfo = doc.data();
        dispatch(SET_SCHEDULE_LIST(userInfo.scheduleList));
        dispatch(SET_STICKER_LIST(userInfo.stickerList));
      }
    });
  }
  useEffect(() => {
    if (isLogin && scheduleList[0].id !== -1 && stickerList[0].id !== -1) {
      const temp = {
        email: currentUser.email,
        stickerList: stickerList,
        scheduleList: scheduleList,
      };
      setDB(temp);
    }
  }, [scheduleList, stickerList]);
  useEffect(() => {
    getDB();
  }, [isLogin]);

  // useEffect(() => {
  //   window.localStorage.setItem("scheduleList", JSON.stringify(scheduleList));
  // }, [scheduleList]);
  // useEffect(() => {
  //   window.localStorage.setItem("stickerList", JSON.stringify(stickerList));
  // }, [stickerList]);
  useEffect(() => {
    window.localStorage.setItem("isLogin", JSON.stringify(isLogin));
  }, [isLogin]);
  useEffect(() => {
    window.localStorage.setItem("currentUser", JSON.stringify(currentUser));
  }, [currentUser]);

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
