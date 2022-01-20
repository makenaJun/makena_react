import {contentAPI, PageContentType} from '../api/api';
import {AppStateType, InferActionsTypes} from './store';
import {ThunkAction} from 'redux-thunk';

export type PagesType = 'HELLO' | 'BLOG' | 'MATERIALS';

const toggleTitle = (page: PagesType) => {
    return (page === 'HELLO') ? 'Обучение программированию. Начало моего пути.' :
        (page === 'BLOG') ? 'Блог' :
            (page === 'MATERIALS') ? 'Материалы для обучения' : 'Ошибка отображения заголовка';
};

const initialState = {
    displayedPage: '' as PagesType,
    titlePage: '',
    content: [] as PageContentType,
    isLoading: false,
    totalCountPosts: 0,
    currentPage: 1,
    pageSize: 10,
    portionSize: 10,
    portionNumber: 1
};

type initialStateType = typeof initialState;


const pageReducer = (state = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case 'makena/postsPage/IS_LOADING' :
            return {
                ...state,
                isLoading: action.payload.load
            }
        case 'makena/postsPage/SET_TITLE_PAGE':
            return {
                ...state,
                titlePage: toggleTitle(action.payload.page)
            };

        case 'makena/postsPage/SET_PAGE':
            return {
                ...state,
                displayedPage: action.payload.page,
                content: action.payload.content
            };

        case "makena/postsPage/SET_TOTAL_POSTS_COUNT":
            return {
                ...state,
                totalCountPosts: action.payload.totalCount
            }
        case "makena/postsPage/SET_CURRENT_PAGE":
            return {
                ...state,
                currentPage: action.payload.currentPage
            }
        case "makena/postsPage/SET_PORTION_NUMBER":
            return {
                ...state,
                portionNumber: action.payload.portionNumber
            }
        default:
            return state
    }

};

type ActionsType = InferActionsTypes<typeof actions>

const actions = {
    setTitlePage: (page: PagesType) => (
        {type: "makena/postsPage/SET_TITLE_PAGE", payload: {page: page}} as const
    ),
    isLoading: (load: boolean) => ({type: "makena/postsPage/IS_LOADING", payload: {load}} as const),
    setDisplayedPage: (page: PagesType, content: PageContentType) => (
        {type: "makena/postsPage/SET_PAGE", payload: {page: page, content}} as const),
    setTotalCountPosts: (totalCount: number) => (
        {type: "makena/postsPage/SET_TOTAL_POSTS_COUNT", payload: {totalCount}} as const),
    setCurrentPage: (currentPage: number) => (
        {type: "makena/postsPage/SET_CURRENT_PAGE", payload: {currentPage}} as const
    ),
    setPortionNumber: (portionNumber: number) => (
        {type: 'makena/postsPage/SET_PORTION_NUMBER', payload: {portionNumber}} as const
    )
}


export const setPage = (page: PagesType, pageSize: number = 10,
                        currentPage: number = 1): ThunkAction<void, AppStateType, unknown, ActionsType> => (
    async (dispatch) => {
        dispatch(actions.isLoading(true));
        dispatch(actions.setTitlePage(page));
        dispatch(actions.setCurrentPage(currentPage));
        const response = await contentAPI.getContent(page, pageSize, currentPage);
        dispatch(actions.setDisplayedPage(page, response.data));
        dispatch(actions.setTotalCountPosts(response.totalCount))
        dispatch(actions.isLoading(false));
    })

export const setPortionNumber = (portionNumber: number):ThunkAction<void, AppStateType, unknown, ActionsType> => (
    (dispatch) => {
        dispatch(actions.setPortionNumber(portionNumber))
    }
)

export default pageReducer;