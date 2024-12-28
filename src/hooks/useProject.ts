import { useMemo } from "react";
import useProjects from "./useProjects";
import { ProjectType } from "@/types";

const useProject = (id?: string) => {
    const {data} = useProjects();

    const project = useMemo(() => {
        return data?.find(item => item.databaseId.toString() === id);
    }, [id, data]) as ProjectType;
    
    return {
        project
    }
};

export default useProject;