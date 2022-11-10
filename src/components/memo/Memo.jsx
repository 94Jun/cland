import { useState } from "react";
const Memo = () => {
  const now = new Date();
  const [stickerValue, setStickerValue] = useState("");
  const onChangeStickerValue = (e) => {
    setStickerValue(e.target.value);
  };
  const onBlurSticker = () => {};
  return (
    <div className="sticker_container">
      <div className="sticker_wrap">
        <div className="sticker_header"></div>
        <textarea
          placeholder="메모를 입력하세요"
          className="sticker"
          value={stickerValue}
          onChange={onChangeStickerValue}
          onBlur={onBlurSticker}
        ></textarea>
        <div className="sticker_footer"></div>
      </div>
    </div>
  );
};

export default Memo;
