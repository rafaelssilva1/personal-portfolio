import useDetails from "@/hooks/useDetails";
import Heading from "@/components/heading/Heading";
import { ContainerMaxWidth, Text } from "./Hero.styles";
import { Container, Image, InnerContainer } from "./Hero.styles";
import Social from "@/components/social/Social";
import useTheme from "@/hooks/useTheme";

const Hero: React.FC = () => {
    const { data } = useDetails();
    const { photo, location, name, role, social, summary } = data || {};

    const {isDarkMode} = useTheme();

    return <Container isDarkMode={isDarkMode}>
        <ContainerMaxWidth>
            <InnerContainer flex={0.4} alignItems="flex-end">
                <Image
                    src={photo}
                    width={192}
                    height={192}
                    alt=""
                />
            </InnerContainer>
            <InnerContainer flex={0.6} alignItems="flex-start">
                <Heading level="1" isDarkMode={isDarkMode}>{name}</Heading>
                <Heading level="2" isDarkMode={isDarkMode}>{role}</Heading>
                <Heading level="3" isDarkMode={isDarkMode}>{location}</Heading>
                <Text>{summary}</Text>
                <Social social={social} />
            </InnerContainer>
        </ContainerMaxWidth>
    </Container>
}

export default Hero;