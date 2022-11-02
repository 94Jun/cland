import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import SchedulePage from './pages/schedule/SchedulePage';
import { useState } from 'react';
import AddSchedule from './components/add_schedule/AddSchedule';
import Header from './components/header/Header';
function App() {
  const [isAddScheduleModalOn, setIsAddScheduleModalOn] = useState(false);
  return (
    <>
      <div className='my_container'>
        <Header setIsAddScheduleModalOn={setIsAddScheduleModalOn} />
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/schedule' element={<SchedulePage/>}></Route>
        </Routes>
      </div>
      {isAddScheduleModalOn ? <AddSchedule setIsAddScheduleModalOn={setIsAddScheduleModalOn} /> : null}
    </>
  );
}

export default App;
