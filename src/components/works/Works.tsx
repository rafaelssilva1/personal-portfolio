import useWorks from "@/hooks/useWorks";
import Work from "./components/work/Work";
import { Container } from "./Works.styles";

const Works: React.FC = () => {
    const { data } = useWorks();

    return (
        <Container>
            {
                data?.map((item, index) => (
                    <Work item={item} key={index} />
                ))
            }
        </Container>
    );
};

export default Works;