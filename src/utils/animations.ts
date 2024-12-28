import { css } from "styled-components";

export const animation = css<{isVisible: boolean}>`
    transform: translateY(3.2rem);
    opacity: 0;
    filter: blur(0.8rem);
    transition: all 1s cubic-bezier(0.25, 1, 0.5, 1);

    ${({ isVisible }) =>
        isVisible &&
        css`
            transform: translateY(0);
            opacity: 1;
            filter: unset;
        `}
`;