import { combineReducers } from "redux";
const movieIDReducer = (selectedID = null, action) => {
  if (action.type === "SET_ID") {
    return action.payload;
  }
  return selectedID;
};

export default combineReducers({
  movieID: movieIDReducer,
});
