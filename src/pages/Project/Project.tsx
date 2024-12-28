import { useParams } from "react-router";
import Image from "@/components/image/Image";
import useProject from "@/hooks/useProject";
import Heading from "@/components/heading/Heading";
import { Container, ImageContainer, InnerContainer, Overlay, TechnologyItem } from "./Project.styles";
import SanitizeHTMLContainer from "@/components/sanitize-html-container/SanitizeHTMLContainer";
import GoBackButton from "@/components/go-back-button/GoBackButton";
import { useLayoutEffect } from "react";
import NotFound from "../NotFound/NotFound";
import ExternalLink from "@/components/external-link/ExternalLink";

const Project: React.FC = () => {
    const { id: paramString } = useParams();
    const parsedId = paramString?.split('-');
    const id = parsedId?.[parsedId?.length - 1];

    const {project} = useProject(id);
    const {
        title, 
        content,
        technologies,
        projectLink,
        featuredImage: { node: { sourceUrl, altText } = {} } = {}
    } = project || {};

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    });

    if(!project) {
        return <NotFound />
    }
   
    return (
        <Container>
            <GoBackButton />
            <Heading level="1">{title}</Heading>
            <ImageContainer>
                <Image src={sourceUrl} width={600} height={600} alt={altText} />
                <Overlay />
            </ImageContainer>
            {
                content ? 
                <>
                    <Heading level="2">Summary</Heading>
                    <SanitizeHTMLContainer content={content} />
                </> : 
                null
            }
            <Heading level="2">Technologies</Heading>
            <InnerContainer>
                {technologies?.map((tech, j) => (
                   <TechnologyItem item={tech} key={j}/> 
                ))}
            </InnerContainer>
            <ExternalLink href={projectLink}>Visit website</ExternalLink>
        </Container>
    );
};

export default Project;