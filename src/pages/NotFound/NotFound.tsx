import GoBackButton from "@/components/go-back-button/GoBackButton"
import { Container } from "./NotFound.styles";
import Heading from "@/components/heading/Heading";

const NotFound: React.FC = () => {
    return (
        <Container>
            <Heading level="1">Page not found</Heading>
            <GoBackButton />
        </Container>
    );
};

export default NotFound;