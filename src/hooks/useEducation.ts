import { useEffect, useMemo } from "react";
import { useMutation } from "react-query";
import useLogin from "./useLogin";
import useLoading from "./useLoading";
import { education } from "@/utils/requests";

const useEducation = () => {
    const {data: jwt} = useLogin();
    const { setIsLoading } = useLoading();

    const {
        data,
        error,
        mutate,
    } = useMutation(education);

    useMemo(() => {
        jwt.jwtAuthToken && mutate(jwt.jwtAuthToken);
    }, [jwt.jwtAuthToken]);
    
    useEffect(() => {
        setIsLoading(!(!!data));
    }, [data]);

    return {
        data: data?.data?.educations?.nodes,
        error,
    }
};

export default useEducation;