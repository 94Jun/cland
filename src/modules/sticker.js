const jsonStickerList = JSON.parse(window.localStorage.getItem("stickerList"));
const initialState = {
  stickerList:
    jsonStickerList && jsonStickerList[0].id !== -1
      ? jsonStickerList
      : [{ id: -1 }],
};
const sticker = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export default sticker;
