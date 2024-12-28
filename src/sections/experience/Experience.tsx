import Education from "@/components/education/Education";
import { Column, Container, Heading, InnerContainer } from "./Experience.styles";
import Works from "@/components/works/Works";

const Experience: React.FC = () => {
    
    return (
        <Container>
            <InnerContainer allowSpacing>
                <Column>
                    <Heading level="2">Work Experience</Heading>
                </Column>
                <Column>
                    <Works />
                </Column>
            </InnerContainer>
            <InnerContainer>
                <Column>
                    <Heading level="2">Education</Heading>
                </Column>
                <Column>
                    <Education />
                </Column>
            </InnerContainer>
        </Container>
    )
};

export default Experience;