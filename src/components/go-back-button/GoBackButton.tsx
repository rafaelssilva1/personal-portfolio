import { useNavigate } from "react-router";
import Button from "../button/Button";
import ArrowLeft from "../icons/ArrowLeft";
import Text from "../text/Text";

const GoBackButton: React.FC = () => {
    const navigate = useNavigate();

    return (
        <Button onClick={() => navigate(-1)}>
            <ArrowLeft />
            <p>Go back</p>
        </Button>
    );
};

export default GoBackButton;