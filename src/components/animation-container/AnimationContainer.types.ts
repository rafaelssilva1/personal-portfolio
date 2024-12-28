import { RefObject } from "react";

export type PropTypes = {
    children: React.ReactNode;
    isVisible: boolean;
    ref: RefObject<null>;
};