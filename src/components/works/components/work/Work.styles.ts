import styled from "styled-components";
import HeadingComponent from "@/components/heading/Heading";
import { weight } from "@/theme/typography.styles";
import Text from "@/components/text/Text";

export const Container = styled.div`
    border-bottom: 0.1rem solid var(--color-black);

    padding-block-end: var(--spacing-24);
`;

export const InnerContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: var(--spacing-24);

`;

export const Company = styled(Text)`
    color: var(--color-black);

    margin-block-start: var(--spacing-16);
`;

export const Dates = styled(Text)`
    color: var(--color-black);
`;