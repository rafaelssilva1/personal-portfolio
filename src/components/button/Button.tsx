import { ButtonHTMLAttributes } from "react";
import { BaseButton } from "./Button.styles";
import withAnimation from "@/hoc/withAnimation";

const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({children, ...props}) => {
    return (
        <BaseButton {...props}>
            {children}
        </BaseButton>
    );
};

export default withAnimation(Button);