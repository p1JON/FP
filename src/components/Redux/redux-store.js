import { combineReducers, createStore } from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sideReducer from "./Side-reducer";
import usersReducer from "./users-reducer";

const redusers = combineReducers({
  postsPage: profileReducer,
  dialogsPage: dialogsReducer,
  sideBar: sideReducer,
  usersPage: usersReducer,
});

const store = createStore(redusers);

export default store;
