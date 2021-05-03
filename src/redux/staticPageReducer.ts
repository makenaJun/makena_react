import { AppStateType } from './store';

const initialState = {
    titlePage: 'Блог',
    content: 'Test message'
};

type initialStateType = typeof initialState;

const staticPageReducer = (state = initialState, action: any): initialStateType => {
    switch (action.type) {
        case 'Hello':
            return {
                ...state
            }
    
        default:
            return state
    }

};

export default staticPageReducer;