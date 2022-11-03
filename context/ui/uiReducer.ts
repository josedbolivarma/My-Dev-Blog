import { UIState } from './';

type UIActionType = 
| { type: 'UI - Changing Theme', payload: 'light' | 'dark' };

export const uiReducer = ( state: any, action: UIActionType ) => {
    switch (action.type) {
        case 'UI - Changing Theme':
            return {
                ...state,
                theme: action.payload
            }
        default:
            return state;
    }
}