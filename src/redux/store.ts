import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import pageReducer from "./PageReducer";
import ProgressReducer from "./ProgressReducer";

const rootReducers = combineReducers({
    postsPage: pageReducer,
    progress: ProgressReducer
})


type reducers = typeof rootReducers;
export type AppStateType = ReturnType<reducers>;


type PropertiesType<T> = T extends { [key:string]: infer U}?  U : never;
export type InferActionsTypes<T extends { [key:string]: (...arg:any) => any}> = ReturnType<PropertiesType<T>>

const store = createStore(rootReducers, applyMiddleware(thunk));

export default store;