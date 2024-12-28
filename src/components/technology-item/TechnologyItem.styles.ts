import styled from "styled-components";

export const Container = styled.div`
    position: relative;
`;

export const Tip = styled.span`
    position: absolute;
    top: calc(var(--spacing-24) + var(--spacing-8));
    left: 50%;
    transform: translateX(-50%);

    background-color: var(--color-black);
    color: var(--bg-primary);

    border-radius: var(--spacing-8);

    padding: var(--spacing-8);

    text-align: center;
`;