import {contentAPI, ProgressResponseType} from '../api/api';
import {AppStateType, InferActionsTypes} from './store';
import {ThunkAction} from 'redux-thunk';

const initialState = {
    htmlCss: 0,
    nativJs: 0,
    reactJs: 0,
    typeScript: 0,
    otherTopicsIt: 0,
    totalProgress: 0,
    elapsedTime: 0,
    dayOfStudy: 'дней',
    updateDate: '01.01.2021'
};

type initialStateType = typeof initialState;


const pageReducer = (state = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case "makena/progress/SET_PROGRESS":
            return {
                ...state,
                htmlCss: action.payload.study.htmlCss,
                nativJs: action.payload.study.nativJs,
                reactJs: action.payload.study.reactJs,
                typeScript: action.payload.study.typeScript,
                otherTopicsIt: action.payload.study.otherTopicsIt,
                totalProgress: action.payload.totalProgress,
                elapsedTime: action.payload.elapsedTime,
                dayOfStudy: action.payload.dayOfStudy,
                updateDate: action.payload.updateDate
            }

        default:
            return state
    }

};

type ActionsType = InferActionsTypes<typeof actions>

const actions = {
    setProgress: (progress: ProgressResponseType) => (
        {type: "makena/progress/SET_PROGRESS", payload: progress} as const
    )
}


export const getProgress = (): ThunkAction<void, AppStateType, unknown, ActionsType> => (
    async (dispatch) => {
         const response = await contentAPI.getProgress();
         dispatch(actions.setProgress(response))
    })

export default pageReducer;