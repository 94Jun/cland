// const jsonScheduleList = JSON.parse(
//   window.localStorage.getItem("scheduleList")
// );
const initialState = {
  scheduleList:
    // jsonScheduleList && jsonScheduleList[0]?.id !== -1
    //   ? jsonScheduleList
    //   : [{ id: -1 }],
    [{ id: -1 }],
};
export const RESET_SCHEDULE_LIST = () => {
  return { type: "RESET_SCHEDULE_LIST" };
};
export const SET_SCHEDULE_LIST = (value) => {
  return { type: "SET_SCHEDULE_LIST", payload: value };
};
export const ADD_SCHEDULE_LIST = (value) => {
  return { type: "ADD_SCHEDULE_LIST", payload: value };
};
const schedule = (state = initialState, action) => {
  switch (action.type) {
    case "RESET_SCHEDULE_LIST":
      return {
        ...state,
        scheduleList: [{ id: -1 }],
      };
    case "SET_SCHEDULE_LIST":
      return {
        ...state,
        scheduleList: action.payload,
      };
    case "ADD_SCHEDULE_LIST":
      return {
        ...state,
        scheduleList: [...state.scheduleList, action.payload],
      };
    default:
      return state;
  }
};
export default schedule;
