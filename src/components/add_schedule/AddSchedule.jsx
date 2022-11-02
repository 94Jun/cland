import './add_schedule.css';
import { useState } from 'react';
const now = new Date();
let years = []
for (let i = now.getFullYear() - 10; i < now.getFullYear()+10; i++) { 
  years.push(i);
}
let months = []
for (let i = 1; i < 13; i++) { 
  if (i < 10) months.push(Number("0" + i));
  else months.push(i);
}

const AddSchedule = ({setIsAddScheduleModalOn}) => {
  const [date, setDate] = useState({
    year: 2022,
    month: 10,
    day : 0
  });
  let days = [];
  const temp = new Date(date.year, date.month, 0).getDate();
  for (let i = 1; i <= temp; i++) { 
  days.push(i);
  }
  const [scheduleTitle, setScheduleTitle] = useState('');
  const [scheduleContent, setScheduleContent] = useState('');
  const onChangeDate = (e) => { 
    if (e.target.id === 'year') {
      setDate((prev) => { 
        return {...prev, year:Number(e.target.value)}
      })
    } else if (e.target.id === 'month') {
      setDate((prev) => { 
        return {...prev, month:Number(e.target.value)}
      })
    } else if (e.target.id === 'day') { 
      setDate((prev) => { 
        return {...prev, day:Number(e.target.value)}
      })
    }
    console.log(e.target.value)
  }
  const onChangeSchedule = (e) => { 
    if (e.target.id === 'schedule_title') {
      setScheduleTitle(e.target.value);
    } else if (e.target.id === 'schedule_content') {
      setScheduleContent(e.target.value);
    }

  }
  const onClickCloseModal = () => {
    setIsAddScheduleModalOn(false);
  }
  return (
    <div className='add_schedule'>
      <form className="add_schedule_wrap">
        <h3 className='add_schedule_title'>일정 추가</h3>
        <div className='add_schedule_select_wrap'>
          <p className='add_schedule_select_title'>날짜</p>
          <select defaultValue={now.getFullYear()} onChange={onChangeDate} id='year' className='add_schedule_select'>
            {years.map((el, idx) => <option value={el} key={idx}>{el}</option>)}
          </select>
          <select defaultValue={now.getMonth()+1} onChange={onChangeDate} id='month' className='add_schedule_select'>
            {months.map((el, idx) => <option value={el} key={idx}>{el}</option>)}
          </select>
          <select defaultValue={now.getDate()} onChange={onChangeDate} id='day' className='add_schedule_select'>
            {days.map((el, idx) => <option value={el} key={idx}>{el}</option>)}
          </select>
        </div>
        <div className='add_schedule_select_wrap'>
          <p className='add_schedule_select_title'>중요도</p>
          <select defaultValue='중' className='add_schedule_select'>
            <option value='상'>상</option>
            <option value='중'>중</option>
            <option vlaue='하'>하</option>
          </select>
        </div>
        <div className='add_schedule_select_wrap'>
          <p className='add_schedule_select_title'>제목</p>
          <input type='text' onChange={onChangeSchedule} value={scheduleTitle} className='add_schedule_input' id='schedule_title'/>
        </div>
        <div className='add_schedule_select_wrap'>
          <p className='add_schedule_select_content'>세부내용</p>
          <input type='text' onChange={onChangeSchedule} value={scheduleContent} className='add_schedule_input' id='schedule_content'/>
        </div>
        <div className='add_schedule_btn_wrap'>
          <button type='button' className='add_btn close_btn' onClick={onClickCloseModal}>닫기</button>
          <button type='submit' className='add_btn'>추가</button>
        </div>
      </form>
    </div>
  );
}
 
export default AddSchedule;