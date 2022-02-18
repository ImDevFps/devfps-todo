import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import TodosReducer from "./todos/todos.reducer";
import StartReducer from "./Start/start.reducer";
import menuReducer from "./Menu/menu.reducer";

const persistConfig = {
  key: "root",
  storage,
  timeout: null,
  whitelist: ["todos", "start"],
};

const rootReducer = combineReducers({
  menu: menuReducer,
  todos: TodosReducer,
  start: StartReducer,
});

export default persistReducer(persistConfig, rootReducer);
