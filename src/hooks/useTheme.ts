import { Context } from "@/context/theme/ThemeContext";
import { useContext, useEffect } from "react";

const useTheme = () => {
    const {isDarkMode, setIsDarkMode} = useContext(Context);

    useEffect(() => {
        const mq = window.matchMedia(
          "(prefers-color-scheme: dark)"
        );
      
        if (mq.matches) {
            setIsDarkMode(true);
        }
    }, []);

    return {
        isDarkMode,
        setIsDarkMode
    }
};

export default useTheme;