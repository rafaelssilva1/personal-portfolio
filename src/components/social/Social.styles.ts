import styled, { css } from "styled-components";

export const Container = styled.div`
    display: flex;
    gap: var(--spacing-16);
`;

export const SocialIcon = styled('a').withConfig({
    shouldForwardProp: (prop) => 
        !['isDarkMode'].includes(prop)
})<{isDarkMode: boolean}>`
    width: 4.8rem;
    height: 4.8rem;

    color: var(--color-black);

    transition: color 150ms ease-in-out;

    &:hover {
        color: var(--color-text);
    }

    ${({isDarkMode}) =>
        isDarkMode && css`
            color: var(--bg-primary);
        `
    }
`;