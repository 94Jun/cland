const jsonCurrentUser = JSON.parse(window.localStorage.getItem("currentUser"));
const initialState = {
  currentUser: jsonCurrentUser ? jsonCurrentUser : null,
};
export const USER_LOGIN = (value) => {
  return { type: "USER_LOGIN", payload: value };
};
export const USER_LOGOUT = () => {
  return { type: "USER_LOGOUT" };
};
const user = (state = initialState, action) => {
  switch (action.type) {
    case "USER_LOGIN":
      return {
        ...state,
        currentUser: action.payload,
      };
    case "USER_LOGOUT":
      return {
        ...state,
        currentUser: null,
      };
    default:
      return state;
  }
};
export default user;
