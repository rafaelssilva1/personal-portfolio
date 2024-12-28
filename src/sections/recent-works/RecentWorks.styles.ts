import styled, { css } from "styled-components";
import * as media from "@/theme/custom-media";

export const Container = styled('section').withConfig({
    shouldForwardProp: prop => 
        !['isDarkMode'].includes(prop)
})<{isDarkMode: boolean}>`
    padding-block: var(--spacing-90);
    padding-inline: var(--spacing-32);
    
    ${({isDarkMode}) =>
        isDarkMode && css`
            background-color: var(--color-black);
    `}
`;

export const InnerContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: stretch;
    justify-content: center;
    gap: clamp(var(--spacing-16), 0.914rem + 2.143vw, var(--spacing-40));

    ${media.extraSmallMedia} {
        grid-template-columns: repeat(1, 1fr);
    }
`;

export const ContainerMaxWidth = styled.div`
    margin-inline: auto;

    max-width: 144rem;

    display: flex;
    flex-direction: column;
    gap: var(--spacing-32);
`;
