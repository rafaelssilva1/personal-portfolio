import Text from "@/components/text/Text";
import { PropTypes } from "./TechnologyItem.types";
import SanitizeHTMLContainer from "@/components/sanitize-html-container/SanitizeHTMLContainer";
import { Container, Tip } from "./TechnologyItem.styles";
import { useState } from "react";

const TechnologyItem: React.FC<PropTypes> = ({item, ...props}) => {
    const [isHover, setIsHover] = useState(false);

    const {title, icon} = item;
    
    return (
        <Container
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            {...props}
        >
            <SanitizeHTMLContainer content={icon} />
            {isHover ? <Tip>{title}</Tip> : null}
        </Container>
    );
};

export default TechnologyItem;