import {AppStateType} from "./store";

export const selectProgress = (state: AppStateType) => {
    return state.progress;
};