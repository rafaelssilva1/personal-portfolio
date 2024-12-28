import withAnimation from "@/hoc/withAnimation";
import { Company, Container, Dates, InnerContainer } from "./Work.styles";
import Heading from "@/components/heading/Heading";
import { PropTypes } from "./Work.types";
import SanitizeHTMLContainer from "@/components/sanitize-html-container/SanitizeHTMLContainer";

const Work: React.FC<PropTypes> = ({item, ...props}) => {
    const {title, content, company, startDate, endDate} = item;
    
    return (
        <Container {...props}>
            <InnerContainer>
                <Heading level="3">{title}</Heading>
                <Dates>{startDate}{endDate ? ` - ${endDate}` :  ` - Present`}</Dates>
            </InnerContainer>
            <SanitizeHTMLContainer
                content={content}
            />
            {company ? <Company>{company}</Company> : null}
        </Container>
    );
};

export default withAnimation(Work);