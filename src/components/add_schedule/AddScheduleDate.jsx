import { useDispatch } from "react-redux";
import { CHECK_DATE_CHANGE } from "../../modules/modify";
const AddScheduleDate = ({
  now,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
}) => {
  const dispatch = useDispatch();
  let startYears = [];
  for (let i = now.getFullYear() - 10; i < now.getFullYear() + 10; i++) {
    startYears.push(i);
  }
  let startMonths = [];
  for (let i = 1; i < 13; i++) {
    if (i < 10) startMonths.push(Number("0" + i));
    else startMonths.push(i);
  }
  let startDays = [];
  const startTemp = new Date(startDate.year, startDate.month, 0).getDate();
  for (let i = 1; i <= startTemp; i++) {
    startDays.push(i);
  }
  let endYears = [];
  for (let i = startDate.year; i < startDate.year + 10; i++) {
    endYears.push(i);
  }
  let endMonths = [];
  if (startDate.year === endDate.year) {
    for (let i = startDate.month; i < 13; i++) {
      if (i < 10) endMonths.push(Number("0" + i));
      else endMonths.push(i);
    }
  } else {
    for (let i = 1; i < 13; i++) {
      if (i < 10) endMonths.push(Number("0" + i));
      else endMonths.push(i);
    }
  }
  let endDays = [];
  const endTemp = new Date(endDate.year, endDate.month, 0).getDate();
  if (startDate.month === endDate.month) {
    for (let i = startDate.day; i <= endTemp; i++) {
      endDays.push(i);
    }
  } else {
    for (let i = 1; i <= endTemp; i++) {
      endDays.push(i);
    }
  }
  const onChangeStartDate = (e) => {
    if (e.target.id === "year") {
      setStartDate((prev) => {
        return { ...prev, year: Number(e.target.value) };
      });
      dispatch(CHECK_DATE_CHANGE("startYear"));
      if (e.target.value > endDate.year) {
        setEndDate((prev) => {
          return { ...prev, year: Number(e.target.value) };
        });
        dispatch(CHECK_DATE_CHANGE("endYear"));
      }
      if (parseInt(e.target.value) + 9 < endDate.year) {
        setEndDate((prev) => {
          return { ...prev, year: Number(parseInt(e.target.value) + 9) };
        });
        dispatch(CHECK_DATE_CHANGE("endYear"));
      }
    } else if (e.target.id === "month") {
      setStartDate((prev) => {
        return { ...prev, month: Number(e.target.value) };
      });
      dispatch(CHECK_DATE_CHANGE("startMonth"));
      if (startDate.year === endDate.year && e.target.value > endDate.month) {
        setEndDate((prev) => {
          return { ...prev, month: Number(e.target.value) };
        });
        dispatch(CHECK_DATE_CHANGE("endMonth"));
      }
    } else if (e.target.id === "day") {
      setStartDate((prev) => {
        return { ...prev, day: Number(e.target.value) };
      });
      dispatch(CHECK_DATE_CHANGE("startDay"));
      if (
        startDate.year === endDate.year &&
        startDate.month === endDate.month &&
        e.target.value > endDate.day
      ) {
        setEndDate((prev) => {
          return { ...prev, day: Number(e.target.value) };
        });
        dispatch(CHECK_DATE_CHANGE("endDay"));
      }
    }
  };
  const onChangeEndDate = (e) => {
    if (e.target.id === "year") {
      setEndDate((prev) => {
        return { ...prev, year: Number(e.target.value) };
      });
      dispatch(CHECK_DATE_CHANGE("endYear"));
    } else if (e.target.id === "month") {
      setEndDate((prev) => {
        return { ...prev, month: Number(e.target.value) };
      });
      dispatch(CHECK_DATE_CHANGE("endMonth"));
    } else if (e.target.id === "day") {
      setEndDate((prev) => {
        return { ...prev, day: Number(e.target.value) };
      });
      dispatch(CHECK_DATE_CHANGE("endDay"));
    }
  };
  return (
    <>
      <div className="add_schedule_select_wrap">
        <p className="add_schedule_select_title">시작날짜</p>
        <select
          // defaultValue={now.getFullYear()}
          onChange={onChangeStartDate}
          id="year"
          className="add_schedule_select"
          value={startDate.year}
        >
          {startYears.map((el, idx) => (
            <option value={el} key={idx}>
              {el}
            </option>
          ))}
        </select>
        <select
          // defaultValue={now.getMonth() + 1}
          onChange={onChangeStartDate}
          id="month"
          className="add_schedule_select"
          value={startDate.month}
        >
          {startMonths.map((el, idx) => (
            <option value={el} key={idx}>
              {el}
            </option>
          ))}
        </select>
        <select
          // defaultValue={now.getDate()}
          onChange={onChangeStartDate}
          id="day"
          className="add_schedule_select"
          value={startDate.day}
        >
          {startDays.map((el, idx) => (
            <option value={el} key={idx}>
              {el}
            </option>
          ))}
        </select>
      </div>
      <div className="add_schedule_select_wrap">
        <p className="add_schedule_select_title">종료날짜</p>
        <select
          // defaultValue={now.getFullYear()}
          onChange={onChangeEndDate}
          id="year"
          className="add_schedule_select"
          value={endDate.year}
        >
          {endYears.map((el, idx) => (
            <option value={el} key={idx}>
              {el}
            </option>
          ))}
        </select>
        <select
          // defaultValue={now.getMonth() + 1}
          onChange={onChangeEndDate}
          id="month"
          className="add_schedule_select"
          value={endDate.month}
        >
          {endMonths.map((el, idx) => (
            <option value={el} key={idx}>
              {el}
            </option>
          ))}
        </select>
        <select
          // defaultValue={now.getDate()}
          onChange={onChangeEndDate}
          id="day"
          className="add_schedule_select"
          value={endDate.day}
        >
          {endDays.map((el, idx) => (
            <option value={el} key={idx}>
              {el}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default AddScheduleDate;
