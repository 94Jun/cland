import './add_schedule.css';
import { useState } from 'react';
import { useEffect } from 'react';
import uuid from 'react-uuid';

const AddSchedule = ({ setIsAddScheduleModalOn, setScheduleList, scheduleList }) => {
  const [startDate, setStartDate] = useState({});
  const [endDate, setEndDate] = useState({});
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
  let startDays = [];
  const startTemp = new Date(startDate.year, startDate.month, 0).getDate();
  for (let i = 1; i <= startTemp; i++) { 
    startDays.push(i);
  }
  let endDays = [];
  const endTemp = new Date(endDate.year, endDate.month, 0).getDate();
  for (let i = 1; i <= endTemp; i++) { 
    endDays.push(i);
  }
  const [scheduleTitle, setScheduleTitle] = useState('');
  const [scheduleContent, setScheduleContent] = useState('');
  const [scheduleImportance, setScheduleImportance] = useState('');
  const onChangeStartDate = (e) => { 
    if (e.target.id === 'year') {
      setStartDate((prev) => { 
        return {...prev, year:Number(e.target.value)}
      })
    } else if (e.target.id === 'month') {
      setStartDate((prev) => { 
        return {...prev, month:Number(e.target.value)}
      })
    } else if (e.target.id === 'day') { 
      setStartDate((prev) => { 
        return {...prev, day:Number(e.target.value)}
      })
    }
  }
  const onChangeEndDate = (e) => { 
    if (e.target.id === 'year') {
      setEndDate((prev) => { 
        return {...prev, year:Number(e.target.value)}
      })
    } else if (e.target.id === 'month') {
      setEndDate((prev) => { 
        return {...prev, month:Number(e.target.value)}
      })
    } else if (e.target.id === 'day') { 
      setEndDate((prev) => { 
        return {...prev, day:Number(e.target.value)}
      })
    }
  }
  const onChangeSchedule = (e) => { 
    if (e.target.id === 'schedule_title') {
      setScheduleTitle(e.target.value);
    } else if (e.target.id === 'schedule_content') {
      setScheduleContent(e.target.value);
    }
  }
  useEffect(() => {
    setScheduleImportance('중');
    setStartDate({ day: now.getDate(), month: now.getMonth() + 1, year: now.getFullYear() });
    setEndDate({ day: now.getDate(), month: now.getMonth() + 1, year: now.getFullYear() });
  }, [scheduleList])
  
  const onClickCloseModal = () => {
    setIsAddScheduleModalOn(false);
  }
  const onChangeImportance = (e) => { 
    setScheduleImportance(e.target.value);
  }
  const onSubmitAddSchedule = (e) => { 
    e.preventDefault();
    setScheduleList((prev) => { 
      if (scheduleList[0].id===-1) {
        return [{
          id : 0,
          startDate: startDate,
          endDate : endDate,
          title: scheduleTitle,
          content: scheduleContent,
          importance : scheduleImportance,
        }]
      } else { 
        return [...prev, {
          id : scheduleList.length,
          startDate: startDate,
          endDate : endDate,
          title: scheduleTitle,
          content: scheduleContent,
          importance : scheduleImportance,
        }]
      }
    })
    setIsAddScheduleModalOn(false);
  }
  return (
    <div className='add_schedule'>
      <form className="add_schedule_wrap" onSubmit={onSubmitAddSchedule}>
        <h3 className='add_schedule_title'>일정 추가</h3>
        <div className='add_schedule_select_wrap'>
          <p className='add_schedule_select_title'>시작날짜</p>
          <select defaultValue={now.getFullYear()} onChange={onChangeStartDate} id='year' className='add_schedule_select' value={startDate.year}>
            {years.map((el, idx) => <option value={el} key={idx}>{el}</option>)}
          </select>
          <select defaultValue={now.getMonth()+1} onChange={onChangeStartDate} id='month' className='add_schedule_select' value={startDate.month}>
            {months.map((el, idx) => <option value={el} key={idx}>{el}</option>)}
          </select>
          <select defaultValue={now.getDate()} onChange={onChangeStartDate} id='day' className='add_schedule_select' value={startDate.day}>
            {startDays.map((el, idx) => <option value={el} key={idx}>{el}</option>)}
          </select>
        </div>
        <div className='add_schedule_select_wrap'>
          <p className='add_schedule_select_title'>종료날짜</p>
          <select defaultValue={now.getFullYear()} onChange={onChangeEndDate} id='year' className='add_schedule_select' value={endDate.year}>
            {years.map((el, idx) => <option value={el} key={idx}>{el}</option>)}
          </select>
          <select defaultValue={now.getMonth()+1} onChange={onChangeEndDate} id='month' className='add_schedule_select' value={endDate.month}>
            {months.map((el, idx) => <option value={el} key={idx}>{el}</option>)}
          </select>
          <select defaultValue={now.getDate()} onChange={onChangeEndDate} id='day' className='add_schedule_select' value={endDate.day}>
            {endDays.map((el, idx) => <option value={el} key={idx}>{el}</option>)}
          </select>
        </div>
        <div className='add_schedule_select_wrap'>
          <p className='add_schedule_select_title'>중요도</p>
          <select defaultValue='중' className='add_schedule_select' onChange={onChangeImportance}>
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
          <p className='add_schedule_select_title'>세부내용</p>
          <input type='text' onChange={onChangeSchedule} value={scheduleContent} className='add_schedule_input' id='schedule_content'/>
        </div>
        <div className='add_schedule_btn_wrap'>
          <button type='button' className='add_btn close_btn' onClick={onClickCloseModal}>닫기</button>
          <button type='submit' className='add_btn' >추가</button>
        </div>
      </form>
    </div>
  );
}
 
export default AddSchedule;