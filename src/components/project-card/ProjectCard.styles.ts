import styled from "styled-components";
import ImageComponent from "../image/Image";
import HeadingComponent from "../heading/Heading";
import { weight } from "@/theme/typography.styles";
import { Link } from "react-router";
import { textOverflow } from "@/utils/text-overflow";

export const Image = styled(ImageComponent)`
    border-radius: var(--spacing-8);
    aspect-ratio: 16/9;

    transition: transform 0.3s ease-in-out;
`;

export const ImageContainer = styled.div`
    overflow: hidden;
    border-radius: var(--spacing-8);
`;

export const Container = styled(Link)`
    display: flex;
    flex-direction: column;
    gap: var(--spacing-16);

    background-color: var(--bg-primary);

    padding: var(--spacing-8);

    border-radius: var(--spacing-16);

    &:hover ${Image} {
        transform: scale(1.1);
    }
`;

export const InnerContainer = styled.div`
    display: flex;
    gap: var(--spacing-16);
`;

export const Heading = styled(HeadingComponent)`
    font-weight: ${weight.bold};
`;

export const Excerpt = styled.div`
    text-overflow: ellipsis;
    
    p {
        ${textOverflow};
    }
`;