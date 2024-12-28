import { css } from "@emotion/react";

export const family = {
  inter: "Inter",
};

export const weight = {
  regular: 400,
  bold: 700,
};

export const fontRoboto = `${family.inter}`;

const sharedStyles = css`
  font-family: ${family.inter}, Helvetica, sans-serif;
  line-height: 1.1;
  font-weight: 400;
`;

const typography = {
  fontRoboto,
  weight,
  h1: css`
    ${sharedStyles}
    font-size: clamp(4.8rem, 4.457rem + 1.071vw, 6rem);
  `,
  h2: css`
    ${sharedStyles}
    font-size: clamp(2.4rem, 2.171rem + 0.714vw, 3.2rem);
  `,
  h3: css`
    ${sharedStyles}
    font-size: 1.8rem;
  `,
  p: css`
    font-size: 1.6rem;
    line-height: 1.5;
    color: var(--color-text);
  `,
  a: {
    default: css`
      font-size: 1.6rem;
      line-height: 2.2rem;
      color: var(--color-black);
      text-decoration: none;
      cursor: pointer;
    `,
    alternative: css`
      font-size: 1.2rem;
      line-height: 1.8rem;
      letter-spacing: 0.08rem;
    `,
  },
};

export default typography;
