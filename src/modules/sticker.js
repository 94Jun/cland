// const jsonStickerList = JSON.parse(window.localStorage.getItem("stickerList"));
const initialState = {
  stickerList:
    // jsonStickerList && jsonStickerList[0]?.id !== -1
    //   ? jsonStickerList
    //   : [{ id: -1 }],
    [{ id: -1 }],
};
export const SET_STICKER_LIST = (value) => {
  return { type: "SET_STICKER_LIST", payload: value };
};
export const ADD_STICKER_LIST = (value) => {
  return { type: "ADD_STICKER_LIST", payload: value };
};
export const RESET_STICKER_LIST = () => {
  return { type: "RESET_STICKER_LIST" };
};
const sticker = (state = initialState, action) => {
  switch (action.type) {
    case "RESET_STICKER_LIST":
      return {
        ...state,
        stickerList: [{ id: -1 }],
      };
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
