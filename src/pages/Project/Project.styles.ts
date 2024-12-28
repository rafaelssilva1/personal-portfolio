import styled from "styled-components";
import TechnologyItemComponent from "@/components/technology-item/TechnologyItem";
import { Tip } from "@/components/technology-item/TechnologyItem.styles";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--spacing-32);

    padding-block: var(--spacing-90);
    padding-inline: var(--spacing-32);

    background-color: var(--bg-primary);
`;

export const ImageContainer = styled.div`
    position: relative;
`;

export const Overlay = styled.div`
    position: absolute;
    inset: 0;

    background-color: var(--color-black-30);
`;

export const InnerContainer = styled.div`
    display: flex;
    gap: var(--spacing-16);
`;

export const TechnologyItem = styled(TechnologyItemComponent)`
    svg {
        width: 4.8rem;
        height: 4.8rem;

        color: var(--color-black);

        &:hover {
            color: var(--color-text);
        }
    }

    ${Tip} {
        top: calc(var(--spacing-48) + var(--spacing-8));
    }
`;