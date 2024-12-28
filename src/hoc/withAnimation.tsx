import useInView from "@/hooks/useInView";
import AnimationContainer from "@/components/animation-container/AnimationContainer";

const withAnimation = <T extends object>(
    WrappedComponent: React.ComponentType<T>
) => {
    const ComponentWithAnimation = (props: T) => {
        const { containerRef, isVisible } = useInView();

        return (
            <AnimationContainer ref={containerRef} isVisible={isVisible}>
                <WrappedComponent {...props} />
            </AnimationContainer>
        );
    };

    ComponentWithAnimation.displayName =
        WrappedComponent.displayName || WrappedComponent.name || "Component";

    return ComponentWithAnimation;
};

export default withAnimation;
