import styled, { css } from "styled-components";

export const Container = styled('div').withConfig({
    shouldForwardProp: (prop) => 
        !['isDarkMode'].includes(prop)
})<{isDarkMode?: boolean}>`
    position: relative;

    background-color: var(--color-black);

    width: calc(3.2rem + var(--spacing-8));
    height: calc(1.6rem + var(--spacing-8));

    border-radius: var(--spacing-16);

    cursor: pointer;

    ${({isDarkMode}) =>
        isDarkMode && css`
            background-color: var(--bg-primary);
        `
    }
`;

export const Circle = styled('div').withConfig({
    shouldForwardProp: prop => 
        !['isActive', 'isDarkMode'].includes(prop)
})<{isActive: boolean, isDarkMode: boolean}>`
    border-radius: 50%;
    background-color: var(--bg-primary);

    position: absolute;
    left: 0.4rem;
    top: 50%;
    transform: translateY(-50%);

    width: 1.6rem;
    height: 1.6rem;

    transition: left 0.3s ease-in-out;

    ${({isActive}) =>
        isActive && css`
            left: calc(1.6rem + 0.4rem);
        `}

    ${({isDarkMode}) =>
        isDarkMode && css`
            background-color: var(--color-black);
        `
    }
`;