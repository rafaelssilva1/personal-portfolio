import { useCallback, useMemo } from "react";
import { useMutation } from "react-query";
import useLogin from "./useLogin";
import { WorkType } from "@/types";
import useLoading from "./useLoading";
import { works } from "@/utils/requests";

const useWorks = () => {
    const {data: jwt} = useLogin();
    const { setIsLoading } = useLoading();

    const {
        data,
        error,
        mutate,
    } = useMutation(works);

    useMemo(() => {
        jwt.jwtAuthToken && mutate(jwt.jwtAuthToken);
    }, [jwt.jwtAuthToken]);
    
    useCallback(() => {
        setIsLoading(!(!!data));
    }, [data]);
    
    const reorderedItems = useMemo(() =>
        data?.data?.works?.nodes.sort((a: WorkType, b: WorkType) => a.order! - b.order!)
    , [data?.data?.works?.nodes]) as WorkType[];

    return {
        data: reorderedItems,
        error,
    }
};

export default useWorks;