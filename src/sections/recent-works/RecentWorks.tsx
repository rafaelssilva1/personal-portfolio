import useProjects from "@/hooks/useProjects";
import { Container, ContainerMaxWidth, InnerContainer } from "./RecentWorks.styles";
import { ProjectType } from "@/types";
import ProjectCard from "@/components/project-card/ProjectCard";
import Heading from "@/components/heading/Heading";
import useTheme from "@/hooks/useTheme";

const RecentWorks: React.FC = () => {
    const { data } = useProjects();
    const { isDarkMode } = useTheme();

    return (
        <Container isDarkMode={isDarkMode}>
            <ContainerMaxWidth>
                <Heading level="2" isDarkMode={isDarkMode}>Recent Works</Heading>
                <InnerContainer>
                    {
                        data?.map((item: ProjectType, index: number) => (
                            <ProjectCard item={item} key={index} />
                        ))
                    }
                </InnerContainer>
            </ContainerMaxWidth>
        </Container>
    );
};

export default RecentWorks;