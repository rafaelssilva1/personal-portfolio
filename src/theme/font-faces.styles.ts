import { css } from "@emotion/react";

import { family } from "./typography.styles";

export default css`
  @font-face {
    font-family: ${family.inter};
    src: url(../assets/fonts/inter/inter.ttf)
      format('truetype');
  }
`;
