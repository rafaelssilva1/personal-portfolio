import withAnimation from "@/hoc/withAnimation";
import { Container, Dates, InnerContainer } from "./EducationItem.styles";
import Heading from "@/components/heading/Heading";
import { PropTypes } from "./EducationItem.types";
import SanitizeHTMLContainer from "@/components/sanitize-html-container/SanitizeHTMLContainer";
import { Text } from "./EducationItem.styles";

const EducationItem: React.FC<PropTypes> = ({item, ...props}) => {
    const {title, content, school, grade, startDate, endDate} = item;
    
    return (
        <Container {...props}>
            <InnerContainer>
                <Heading level="3">{title}</Heading>
                <Dates>{startDate}{endDate ? ` - ${endDate}` :  ` - Present`}</Dates>
            </InnerContainer>
            <SanitizeHTMLContainer
                content={content}
            />
            {school ? <Text>School: {school}</Text> : null}
            {grade ? <Text>Grade: {grade}</Text> : null}
        </Container>
    );
};

export default withAnimation(EducationItem);