import useEducation from "@/hooks/useEducation";
import { Container } from "./Education.styles";
import EducationItem from "./components/EducationItem";
import { EducationType } from "@/types";

const Education: React.FC = () => {
    const { data } = useEducation();

    return (
        <Container>
            {
                data?.map((item: EducationType, index: number) => (
                    <EducationItem item={item} key={index} />
                ))
            }
        </Container>
    );
};

export default Education;