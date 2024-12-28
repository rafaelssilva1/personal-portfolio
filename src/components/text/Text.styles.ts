import styled, { css } from "styled-components";

export const BaseText = styled('p').withConfig({
  shouldForwardProp: (prop) =>
    !['isDarkMode'].includes(prop)
})<{isDarkMode?: boolean}>`
  ${({isDarkMode}) =>
    isDarkMode && css`
      color: var(--color-white);
    `
  }
`;
