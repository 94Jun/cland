const initialState = {
  modifyItem: {},
};
export const RESET_MODIFY_ITEM = () => {
  return { type: "RESET_MODIFY_ITEM" };
};
export const SET_MODIFY_ITEM = (value) => {
  return { type: "SET_MODIFY_ITEM", item: value };
};
export const CHECK_DATE_CHANGE = (value) => {
  return { type: "CHECK_DATE_CHANGE", changeValue: value };
};
const modify = (state = initialState, action) => {
  switch (action.type) {
    case "RESET_MODIFY_ITEM":
      return {
        ...state,
        modifyItem: {},
      };
    case "SET_MODIFY_ITEM":
      return {
        ...state,
        modifyItem: action.item,
      };
    case "CHECK_DATE_CHANGE":
      return {
        ...state,
        modifyItem: { ...state.modifyItem, changeValue: action.changeValue },
      };
    default:
      return state;
  }
};
export default modify;
