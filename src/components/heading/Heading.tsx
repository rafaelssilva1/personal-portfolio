import withAnimation from "@/hoc/withAnimation";
import { BaseHeading } from "./Heading.styles";
import { PropTypes } from "./Heading.types";

const Heading: React.FC<PropTypes> = ({ children, level, isDarkMode = false, ...props }) => {
  return (
    <BaseHeading
      role="heading"
      as={`h${level}`}
      level={level}
      isDarkMode={isDarkMode}
      {...props}
    >
      {children}
    </BaseHeading>
  );
};

export default withAnimation(Heading);
