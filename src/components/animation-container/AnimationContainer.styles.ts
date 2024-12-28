import { animation } from "@/utils/animations";
import styled from "styled-components";

export const Container = styled('div').withConfig({ 
    shouldForwardProp: (prop) =>  
      !['isVisible'].includes(prop)
    })<{isVisible: boolean}>`
    ${animation}

    overflow: hidden;
`;
