import "./login.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { LOGIN_MODAL_OFF } from "../../modules/modal";
import { LOGIN } from "../../modules/login";

const LoginModal = () => {
  const dispatch = useDispatch();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const onClickCloseLoginModal = () => {
    dispatch(LOGIN_MODAL_OFF());
  };
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const onSubmitLogin = (e) => {
    e.preventDefault();
    if (password && email) {
      dispatch(LOGIN());
      dispatch(LOGIN_MODAL_OFF());
    }
  };
  const onClickBackground = (e) => {
    if (e.target.className === "login_container") {
      dispatch(LOGIN_MODAL_OFF());
    }
  };
  return (
    <div className="login_container" onClick={onClickBackground}>
      <div className="login_wrap">
        <h2 className="login_title">로그인</h2>
        <form className="login_form" onSubmit={onSubmitLogin}>
          <div className="login_input_wrap">
            <label htmlFor="email" className="login_input_label">
              이메일
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={onChangeEmail}
            />
          </div>
          <div className="login_input_wrap">
            <label htmlFor="password" className="login_input_label">
              비밀번호
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={onChangePassword}
            />
          </div>
          <button type="submit" className="add_btn signin_btn">
            로그인
          </button>
          <button
            type="button"
            className="add_btn close_btn signin_btn"
            onClick={onClickCloseLoginModal}
          >
            닫기
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
