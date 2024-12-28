import { Context } from "@/context/loading/LoadingContext";
import { useContext } from "react";

const useLoading = () => {
    const {isLoading, setIsLoading} = useContext(Context);

    return {
        isLoading,
        setIsLoading
    }
};

export default useLoading;