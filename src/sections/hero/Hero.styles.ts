import styled, { css } from "styled-components";
import ImageComponent from "@/components/image/Image";
import TextComponent from "@/components/text/Text";

import * as media from '@/theme/custom-media';

export const Container = styled('section').withConfig({
    shouldForwardProp: (prop) =>
        !['isDarkMode'].includes(prop)
})<{isDarkMode: boolean}>`
    padding-block: var(--spacing-90);
    padding-inline: var(--spacing-32);

    ${({isDarkMode}) =>
        isDarkMode && css`
        background-color: var(--color-black);
        `
    }
`;

export const Image = styled(ImageComponent)`
    border-radius: 50%;

    max-width: 30rem;
    max-height: 30rem;
`;


export const InnerContainer = styled('div').withConfig({ 
    shouldForwardProp: (prop) =>  
      !['alignItems','flex'].includes(prop)
    })<{alignItems?: string; flex?: number}>`
        display: flex;
        flex-direction: column;
        align-items: ${props => props.alignItems ? props.alignItems : 'center'};
        gap: var(--spacing-16);

        flex: ${props => props.flex ? props.flex : 1};

        width: 100%;

        ${media.extraSmallMedia} {
            align-items: flex-start;
        }
`;

export const Text = styled(TextComponent)`
    margin-inline-end: var(--spacing-32);
`;

export const ContainerMaxWidth = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--spacing-40);

    margin-inline: auto;

    max-width: 144rem;

    ${media.extraSmallMedia} {
        flex-direction: column-reverse;
    }

`;