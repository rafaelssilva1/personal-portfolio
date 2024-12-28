import { weight } from "@/theme/typography.styles";
import styled, { css } from "styled-components";

export const Container = styled('div').withConfig({
    shouldForwardProp: (prop) => 
        !['isDarkMode'].includes(prop)
})<{isDarkMode?: boolean}>`
    * {
        font-size: 1.4rem;
    }

    svg {
        color: var(--color-text);

        width: 2.4rem;
        height: 2.4rem;

        transition: color 150ms ease-in-out;

        &:hover {
            color: var(--color-black);
        }
    }

    li {
        list-style: disc;
        list-style-position: inside;

        li {
            list-style: circle;
        }
    }

    a {
        font-weight: ${weight.bold};
    }

    ul {
        ul {
            margin-left: var(--spacing-24);
        }
    }

    ${({isDarkMode}) =>
        isDarkMode && css`
            ul, a {
                color: var(--color-white);
            }
        `
    }
`;