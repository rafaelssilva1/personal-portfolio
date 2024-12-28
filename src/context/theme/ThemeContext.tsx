import { createContext, Dispatch, SetStateAction, useState } from 'react';

type PropTypes = {
    children: React.ReactNode;
}

type ContextProps = {
    isDarkMode: boolean;
    setIsDarkMode: Dispatch<SetStateAction<boolean>>;
}

const defaultContext: ContextProps = {
    isDarkMode: false,
    setIsDarkMode: () => {},
};

export const Context = createContext(defaultContext);

export const ThemeContext: React.FC<PropTypes> = ({children, ...props}) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    return (
        <Context.Provider value={{isDarkMode, setIsDarkMode}} {...props}>
            {children}
        </Context.Provider>
    )
};
