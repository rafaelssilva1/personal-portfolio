import { PropTypes } from "./ProjectCard.types";
import { Container, Image, InnerContainer, Heading, Excerpt, ImageContainer } from "./ProjectCard.styles";
import TechnologyItem from "../technology-item/TechnologyItem";
import { trim } from "@/utils/trim";

const ProjectCard: React.FC<PropTypes> = ({item, ...props}) => {
    const {databaseId, title, excerpt, featuredImage: {node: {sourceUrl: url, altText}}, technologies} = item;

    return (
        <Container to={`projects/${trim(title)}-${databaseId}`} {...props}>
            <ImageContainer>
                <Image src={url} width={300} height={300} alt={altText} />
            </ImageContainer>
            <Heading level="3">{title}</Heading>
            {excerpt ? <Excerpt dangerouslySetInnerHTML={{__html: excerpt}} /> : null}
            <InnerContainer>
                {technologies.map((tech, j) => (
                   <TechnologyItem item={tech} key={j}/> 
                ))}
            </InnerContainer>
        </Container>
    );
};

export default ProjectCard;