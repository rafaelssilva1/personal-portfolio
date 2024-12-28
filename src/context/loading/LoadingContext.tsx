import { createContext, Dispatch, SetStateAction, useState } from 'react';

type PropTypes = {
    children: React.ReactNode;
}

type ContextProps = {
    isLoading: boolean;
    setIsLoading: Dispatch<SetStateAction<boolean>>;
}

const defaultContext: ContextProps = {
    isLoading: false,
    setIsLoading: () => {},
};

export const Context = createContext(defaultContext);

export const LoadingContext: React.FC<PropTypes> = ({children, ...props}) => {
    const [isLoading, setIsLoading] = useState(false);

    return (
        <Context.Provider value={{isLoading, setIsLoading}} {...props}>
            {children}
        </Context.Provider>
    )
};
