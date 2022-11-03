import { createContext } from "react";

interface ContextProps {
    theme: 'light' | 'dark';
    // Methods
    changeTheme: ( theme: 'light' | 'dark' ) => void;
};

export const UIContext = createContext({} as ContextProps );