import { combineReducers } from "redux";
import modal from "./modal";
import login from "./login";
import modify from "./modify";
import schedule from "./schedule";
import sticker from "./sticker";
import user from "./user";
export const rootReducer = combineReducers({
  modal,
  login,
  modify,
  schedule,
  sticker,
  user,
});
