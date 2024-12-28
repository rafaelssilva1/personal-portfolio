import { Circle, Container } from "./Switch.styles";
import { PropTypes } from "./Switch.types";
import withAnimation from "@/hoc/withAnimation";

const Switch: React.FC<PropTypes> = ({onClick, isActive, isDarkMode = false, ...props}) => {
    return (
        <Container onClick={onClick} isDarkMode={isDarkMode} {...props}>
            <Circle isActive={isActive} isDarkMode={isDarkMode} />
        </Container>
    )
};

export default withAnimation(Switch);