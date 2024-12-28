import { useEffect, useMemo } from "react";
import { useMutation } from "react-query";
import useLogin from "./useLogin";
import useLoading from "./useLoading";
import { information } from "@/utils/requests";

const useInformation = () => {
    const {data: jwt} = useLogin();
    const { setIsLoading } = useLoading();
    
    const {
        data,
        error,
        mutate,
    } = useMutation(information);

    useMemo(() => {
        jwt.jwtAuthToken && mutate(jwt.jwtAuthToken);
    }, [jwt.jwtAuthToken]);
    
    useEffect(() => {
        setIsLoading(!(!!data));
    }, [data]);

    return {
        data: data?.data?.informations?.nodes,
        error,
    }
};

export default useInformation;