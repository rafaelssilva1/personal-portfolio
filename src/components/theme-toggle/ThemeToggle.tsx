import useTheme from "@/hooks/useTheme";
import Switch from "../switch/Switch";
import Text from "../text/Text";
import { Container } from "./ThemeToggle.styles";

const ThemeToggle: React.FC = () => {
    const {isDarkMode, setIsDarkMode} = useTheme();

    return (
        <Container>
            <Text isDarkMode={isDarkMode}>Light</Text>
            <Switch
                onClick={() => setIsDarkMode(prev => !prev)}
                isActive={isDarkMode}
                isDarkMode={isDarkMode}
            />
            <Text isDarkMode={isDarkMode}>Dark</Text>
        </Container>
    )
};

export default ThemeToggle;