import styled, { css } from "styled-components";

export const Container = styled('header').withConfig({
    shouldForwardProp: (prop) => 
        !['isDarkMode'].includes(prop)
})<{isDarkMode?: boolean}>`
    display: flex;
    justify-content: flex-end;

    padding: var(--spacing-16);

    background-color: var(--bg-primary);

    ${({isDarkMode}) =>
        isDarkMode && css`
            background-color: var(--color-black);
        `
    }
`;