import { useEffect, useMemo } from "react";
import { useMutation } from "react-query";
import useLogin from "./useLogin";
import useLoading from "./useLoading";
import { details } from "@/utils/requests";

const useDetails = () => {
    const { data: jwt } = useLogin();
    const { setIsLoading } = useLoading();

    const {
        data,
        error,
        mutate,
    } = useMutation(details);

    useMemo(() => {
        jwt.jwtAuthToken && mutate(jwt.jwtAuthToken);
    }, [jwt.jwtAuthToken]);
    
    useEffect(() => {
        setIsLoading(!(!!data));
    }, [data]);

    return {
        data: data?.data?.details,
        error,
    }
};

export default useDetails;