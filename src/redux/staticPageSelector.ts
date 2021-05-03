import { AppStateType } from './store';

export const selectTitlePage = (state: AppStateType) => {
    return state.staticPage.titlePage
}

export const selectContent = (state: AppStateType) => {
    return state.staticPage.content
}