import { useEffect, useRef, useState } from "react";

const useInView = (options: IntersectionObserverInit = {
  threshold: 0
}) => {
    const containerRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    const callback: IntersectionObserverCallback = (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
    };

    useEffect(() => {
      const observer = new IntersectionObserver(callback, options);
      if(containerRef.current) observer.observe(containerRef.current);
    
      return () => {
        if(containerRef.current) observer.unobserve(containerRef.current);
      }
    }, [])
    
    return {
        containerRef,
        isVisible
    }
};

export default useInView;