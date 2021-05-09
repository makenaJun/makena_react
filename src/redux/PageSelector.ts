import { AppStateType } from './store';

export const selectTitlePage = (state: AppStateType) => {
    return state.postsPage.titlePage;
};

export const selectContent = (state: AppStateType) => {
    return state.postsPage.content;
};

export const selectIsLoading = (state: AppStateType) => {
    return state.postsPage.isLoading;
};

export const selectPortionSize = (state: AppStateType) => {
    return state.postsPage.portionSize;
};

export const selectCurrentPage = (state: AppStateType) => {
    return state.postsPage.currentPage;
};

export const  selectTotalCountPosts = (state: AppStateType) => {
    return state.postsPage.totalCountPosts;
};
export const  selectPageSize = (state: AppStateType) => {
    return state.postsPage.pageSize;
};
export const  selectPortionNumber = (state: AppStateType) => {
    return state.postsPage.portionNumber;
};
