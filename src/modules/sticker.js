const jsonStickerList = JSON.parse(window.localStorage.getItem("stickerList"));
const initialState = {
  stickerList:
    jsonStickerList && jsonStickerList[0]?.id !== -1
      ? jsonStickerList
      : [{ id: -1 }],
};
export const SET_STICKER_LIST = (value) => {
  console.log("set");
  return { type: "SET_STICKER_LIST", payload: value };
};
export const ADD_STICKER_LIST = (value) => {
  console.log("add");
  return { type: "ADD_STICKER_LIST", payload: value };
};
const sticker = (state = initialState, action) => {
  switch (action.type) {
    case "SET_STICKER_LIST":
      return {
        ...state,
        stickerList: action.payload,
      };
    case "ADD_STICKER_LIST":
      return {
        ...state,
        stickerList: [...state.stickerList, action.payload],
      };
    default:
      return state;
  }
};
export default sticker;
