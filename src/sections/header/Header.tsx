import ThemeToggle from "@/components/theme-toggle/ThemeToggle";
import { Container } from "./Header.styles";
import useTheme from "@/hooks/useTheme";

const Header: React.FC = () => {
    const {isDarkMode} = useTheme();

    return (
        <Container isDarkMode={isDarkMode}>
            <ThemeToggle />
        </Container>
    )
}

export default Header;