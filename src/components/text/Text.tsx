import withAnimation from "@/hoc/withAnimation";
import { BaseText } from "./Text.styles";
import { PropTypes } from "./Text.types";

const Text: React.FC<PropTypes> = ({children, isDarkMode, ...props}) => {
    return <BaseText isDarkMode={isDarkMode} {...props}>{children}</BaseText>
};

export default withAnimation(Text);