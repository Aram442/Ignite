import { combineReducers } from "redux";
// we have a lot of Reducer we need to (Combined Them to one.)

import gamesReducer from "./gamesReducer";

const rootReducer = combineReducers({
    games: gamesReducer,
    // detail: detailReducer,
  });
  
  export default rootReducer;