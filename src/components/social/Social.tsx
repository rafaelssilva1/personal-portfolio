import { useMemo } from "react";
import { PropTypes } from "./Social.types";
import { Container, SocialIcon } from "./Social.styles";
import withAnimation from "@/hoc/withAnimation";
import useTheme from "@/hooks/useTheme";

const Social: React.FC<PropTypes> = ({social, ...props}) => {
    const reorderedSocial = useMemo(() => social?.sort((a, b) => a.order! - b.order!), [social]);

    const {isDarkMode} = useTheme();

    return <Container {...props}>
        {
            reorderedSocial?.map(({icon, link}, index) => {
                return (
                    <SocialIcon
                        dangerouslySetInnerHTML={{__html: icon}}
                        key={index}
                        href={link}
                        target="_blank"
                        isDarkMode={isDarkMode}
                    />
                )
            })
        }
    </Container>
};

export default withAnimation(Social);