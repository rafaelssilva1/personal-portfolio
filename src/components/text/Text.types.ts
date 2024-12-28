import { HTMLAttributes } from "react";

export interface PropTypes extends HTMLAttributes<HTMLParagraphElement> {
    isDarkMode?: boolean;
}