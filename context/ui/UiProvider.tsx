import { FC, PropsWithChildren, useReducer } from 'react';
import { uiReducer, UIContext } from './';


export interface UIState {
  theme: 'light' | 'dark';
}

const UI_INITIAL_STATE: UIState = {
  theme: 'light'
}

const UiProvider: FC<PropsWithChildren> = ({ children }) => {

  const [state, dispatch] = useReducer( uiReducer, UI_INITIAL_STATE);

  const changeTheme = ( theme: 'light' | 'dark' ) => {
    dispatch({
      type: 'UI - Changing Theme',
      payload: theme
    });
  }

  return (
    <UIContext.Provider value={{
      ...state,
      // Methods
      changeTheme
    }}>
      {
        children
      }
    </UIContext.Provider>
  )
}

export default UiProvider