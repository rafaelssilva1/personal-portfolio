import styled from "styled-components";
import Text from "../text/Text";

export const BaseButton = styled.button`
    display: flex;
    align-items: center;
    gap: var(--spacing-8);

    p {
        color: var(--color-black);
    }
`;