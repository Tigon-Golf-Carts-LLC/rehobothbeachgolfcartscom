import { useEffect } from 'react';
import { useLocation } from 'wouter';

export function useScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    // Scroll to top when route changes
    // Use a small timeout to ensure DOM is ready
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant' // Use 'instant' for immediate scroll without animation
      });
      
      // Fallback for older browsers or edge cases
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    // Execute immediately and with a small delay for safety
    scrollToTop();
    const timeoutId = setTimeout(scrollToTop, 10);

    return () => clearTimeout(timeoutId);
  }, [location]);
}

export default useScrollToTop;