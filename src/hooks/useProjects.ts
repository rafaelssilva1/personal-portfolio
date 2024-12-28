import useLogin from "./useLogin";
import { useEffect, useMemo } from "react";
import { useMutation } from "react-query";
import useLoading from "./useLoading";
import { ProjectType } from "@/types";
import { projects } from "@/utils/requests";

const useProjects = () => {
    const {data: jwt} = useLogin();
    const { setIsLoading } = useLoading();

    const {
        data,
        error,
        mutate,
    } = useMutation(projects);

    useMemo(() => {
        jwt.jwtAuthToken && mutate(jwt.jwtAuthToken);
    }, [jwt.jwtAuthToken]);
    
    useEffect(() => {
        setIsLoading(!(!!data));
    }, [data]);

    const reorderedItems = useMemo(() =>
        data?.data?.posts?.nodes.sort((a: ProjectType, b: ProjectType) => a.order! - b.order!)
    , [data?.data?.posts?.nodes]) as ProjectType[];    

    return {
        data: reorderedItems,
        error,
    }
};

export default useProjects;