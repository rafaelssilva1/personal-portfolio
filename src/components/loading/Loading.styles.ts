import styled, { css } from "styled-components";

export const Container = styled('div').withConfig({
    shouldForwardProp: (prop) => 
        !['isDarkMode'].includes(prop)
})<{isDarkMode?: boolean}>`
    position: absolute;
    inset: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: var(--color-white);

    z-index: var(--index-modal);

    ${({isDarkMode}) =>
        isDarkMode && css`
            background-color: var(--color-black);

            svg {
                color: var(--bg-primary);
            }
        `
    }
`;