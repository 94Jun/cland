import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SET_STICKER_LIST, ADD_STICKER_LIST } from "../../modules/sticker";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import BookmarkOutlinedIcon from "@mui/icons-material/BookmarkOutlined";
import Br from "./Br";
import { createUserWithEmailAndPassword } from "firebase/auth";
const Memo = ({ item, idx, name }) => {
  const dispatch = useDispatch();
  const stickerList = useSelector((state) => {
    return state.sticker.stickerList;
  });
  const [stickerValue, setStickerValue] = useState("");
  const [isModifyOn, setIsModifyOn] = useState(false);
  const onChangeStickerValue = (e) => {
    let contents = e.target.value;
    contents = contents;
    setStickerValue(contents);
  };
  const onBlurSticker = () => {
    if (stickerValue) {
      const temp = {
        ...item,
        timeStamp: new Date().toLocaleString(),
        text: stickerValue,
      };
      const tempList = stickerList.map((el) => {
        if (item.id === el.id) {
          return temp;
        } else {
          return el;
        }
      });
      dispatch(SET_STICKER_LIST(tempList));
    }
    setIsModifyOn(false);
  };
  const onClickModify = () => {
    setIsModifyOn(true);
    setStickerValue(item.text);
  };
  const onClickRemoveSticker = () => {
    let tempList = stickerList
      .filter((el, idx) => {
        return item.id !== el.id;
      })
      .map((el, idx) => {
        return { ...el, id: idx };
      });
    if (tempList.length == 0) {
      tempList = [{ id: -1 }];
    }
    dispatch(SET_STICKER_LIST(tempList));
  };
  const onClickColorChanger = (e) => {
    let temp = {};
    if (e.target.className.slice(14) === "antiquewhite") {
      temp = { ...item, color: "antiquewhite" };
    } else if (e.target.className.slice(14) === "aliceblue") {
      temp = { ...item, color: "aliceblue" };
    } else if (e.target.className.slice(14) === "pink") {
      temp = { ...item, color: "pink" };
    }
    const tempList = stickerList.map((el) => {
      if (item.id === el.id) {
        return temp;
      } else {
        return el;
      }
    });
    dispatch(SET_STICKER_LIST(tempList));
  };
  const onClickMark = () => {
    let temp = {};
    if (item.isMarked) {
      temp = {
        ...item,
        isMarked: false,
      };
    } else {
      temp = {
        ...item,
        isMarked: true,
      };
    }
    const tempList = stickerList.map((el) => {
      if (item.id === el.id) {
        return temp;
      } else {
        return el;
      }
    });
    dispatch(SET_STICKER_LIST(tempList));
  };
  return (
    <div className={`sticker_container`} id={name}>
      <div className={`sticker_wrap ${item.color}`}>
        <div className="sticker_header">
          <div
            className="color_changer pink"
            onClick={onClickColorChanger}
          ></div>
          <div
            className="color_changer aliceblue"
            onClick={onClickColorChanger}
          ></div>
          <div
            className="color_changer antiquewhite"
            onClick={onClickColorChanger}
          ></div>
          <div className="book_mark_icon">
            {item.isMarked ? (
              <BookmarkOutlinedIcon
                fontSize="small"
                style={{ color: "#777" }}
                onClick={onClickMark}
              />
            ) : (
              <BookmarkBorderOutlinedIcon
                fontSize="small"
                style={{ color: "#777" }}
                onClick={onClickMark}
              />
            )}
          </div>
          <div onClick={onClickRemoveSticker}>x</div>
        </div>
        {item.text && !isModifyOn ? (
          <div className="sticker" onClick={onClickModify}>
            {item.text}
          </div>
        ) : (
          <textarea
            placeholder="메모를 입력하세요"
            className="sticker"
            value={stickerValue}
            onChange={onChangeStickerValue}
            onBlur={onBlurSticker}
            style={{ fontSize: "16px", fontFamily: "Pretendard" }}
          ></textarea>
        )}

        <div className="sticker_footer">{item.timeStamp}</div>
      </div>
    </div>
  );
};

export default Memo;
