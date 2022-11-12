const jsonIsLogin = JSON.parse(window.localStorage.getItem("isLogin"));
const initialState = {
  isLogin: jsonIsLogin ? jsonIsLogin : false,
};
export const LOGIN = () => {
  return { type: "LOGIN" };
};
export const LOGOUT = () => {
  return { type: "LOGOUT" };
};
const login = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isLogin: true,
      };
    case "LOGOUT":
      return {
        ...state,
        isLogin: false,
      };
    default:
      return state;
  }
};
export default login;
