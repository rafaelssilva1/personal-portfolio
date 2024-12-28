import { Container } from "./AnimationContainer.styles";
import { PropTypes } from "./AnimationContainer.types";

const AnimationContainer: React.FC<PropTypes> = ({children, ref, isVisible, ...props}) => {
    return <Container ref={ref} isVisible={isVisible} {...props}>
        {children}
    </Container>
};

export default AnimationContainer;