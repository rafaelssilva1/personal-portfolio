import withAnimation from "@/hoc/withAnimation";
import { Container } from "./SanitizeHTMLContainer.styles";
import { PropTypes } from "./SanitizeHTMLContainer.types";

const SanitizeHTMLContainer: React.FC<PropTypes> = ({content, isDarkMode = false, title}) => {
    return (
        <Container
            dangerouslySetInnerHTML={{__html: content}}
            title={title}
            isDarkMode={isDarkMode}
        />
    );
};

export default withAnimation(SanitizeHTMLContainer);