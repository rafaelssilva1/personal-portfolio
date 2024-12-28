import ExternalIcon from "../icons/ExternalIcon";
import { BaseLink } from "./ExternalLink.styles";
import { PropTypes } from "./ExternalLink.types";

const ExternalLink: React.FC<PropTypes> = ({href, children, target = '_blank', ...props}) => {
    if(!href) {
        return null;
    }

    return (
        <BaseLink href={href} target={target} {...props}>
            <span>{children}</span>
            <ExternalIcon />
        </BaseLink>
    )
};

export default ExternalLink;