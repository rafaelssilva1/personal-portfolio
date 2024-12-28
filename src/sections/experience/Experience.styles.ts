import styled, { css } from "styled-components";
import HeadingComponent from "@/components/heading/Heading";
import * as media from '@/theme/custom-media';

export const Container = styled.section`
    background-color: var(--bg-primary);
`;

export const InnerContainer = styled('div').withConfig({ 
    shouldForwardProp: (prop) =>  
      !['allowSpacing'].includes(prop)
    })<{allowSpacing?: boolean}>`
    max-width: 144rem;
    margin-inline: auto;

    display: flex;
    gap: var(--spacing-32);

    padding-inline: var(--spacing-32);

    ${({ allowSpacing }) =>
        allowSpacing ?
        css`
            padding-block: var(--spacing-90);
        ` :
        css`
            padding-block: var(--spacing-0) var(--spacing-90);
        `}

    ${media.extraSmallMedia} {
        flex-direction: column;
    }
`;

export const Column = styled.div`
    flex: 1;
`;

export const Heading = styled(HeadingComponent)`
    text-align: center;

    ${media.extraSmallMedia} {
        text-align: left;
    }
`;