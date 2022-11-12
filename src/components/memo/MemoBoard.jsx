import Memo from "./Memo";
import "./memo.css";
import { useSelector, useDispatch } from "react-redux";
import { ADD_STICKER_LIST, SET_STICKER_LIST } from "../../modules/sticker";
const MemoBoard = () => {
  const dispatch = useDispatch();
  const stickerList = useSelector((state) => {
    return state.sticker.stickerList;
  });
  const onClickAddSticker = () => {
    if (stickerList && stickerList[0].id == -1) {
      const temp = [
        {
          id: 0,
          color: "antiquewhite",
        },
      ];
      dispatch(SET_STICKER_LIST(temp));
    } else {
      const temp = {
        id: stickerList.length,
        color: "antiquewhite",
      };
      dispatch(ADD_STICKER_LIST(temp));
    }
  };
  return (
    <>
      <div className="memo_board_wrap">
        <button className="add_sticker_btn" onClick={onClickAddSticker}>
          + 메모 추가
        </button>
        {stickerList.length > 0 && stickerList[0].id != -1
          ? stickerList.map((item, idx) => {
              return <Memo key={idx} idx={idx} item={item} name="board" />;
            })
          : null}
      </div>
    </>
  );
};

export default MemoBoard;
