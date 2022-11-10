const initialState = {
  isAddScheduleModalOn: false,
  isModifyOn: false,
  isLoginModalOn: false,
};
export const SCHEDULE_MODAL_ON = () => {
  return { type: "SCHEDULE_MODAL_ON" };
};
export const SCHEDULE_MODAL_OFF = () => {
  return { type: "SCHEDULE_MODAL_OFF" };
};

export const MODIFY_ON = () => {
  return { type: "MODIFY_ON" };
};
export const LOGIN_MODAL_ON = () => {
  return { type: "LOGIN_MODAL_ON" };
};
export const LOGIN_MODAL_OFF = () => {
  return { type: "LOGIN_MODAL_OFF" };
};
const modal = (state = initialState, action) => {
  switch (action.type) {
    case "SCHEDULE_MODAL_ON":
      return {
        ...state,
        isAddScheduleModalOn: true,
        isModifyOn: false,
        isLoginModalOn: false,
      };
    case "SCHEDULE_MODAL_OFF":
      return {
        ...state,
        isAddScheduleModalOn: false,
        isModifyOn: false,
      };
    case "MODIFY_ON":
      return {
        ...state,
        isAddScheduleModalOn: true,
        isModifyOn: true,
        isLoginModalOn: false,
      };
    case "LOGIN_MODAL_ON":
      return { ...state, isAddScheduleModalOn: false, isLoginModalOn: true };
    case "LOGIN_MODAL_OFF":
      return { ...state, isLoginModalOn: false };
    default:
      return state;
  }
};
export default modal;
