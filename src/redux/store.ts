import { combineReducers, createStore } from "redux";
import staticPageReducer from "./staticPageReducer";


const rootReducers = combineReducers({
    staticPage: staticPageReducer
})


type reducers = typeof rootReducers;
export type AppStateType = ReturnType<reducers>;

const store = createStore(rootReducers);

export default store;