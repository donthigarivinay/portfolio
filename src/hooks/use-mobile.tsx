import * as React from "react";

// Set your breakpoint for mobile detection
const MOBILE_BREAKPOINT = 768; // pixels

/**
 * useIsMobile
 * A small hook that returns true when the viewport width is below MOBILE_BREAKPOINT.
 *
 * Usage:
 * const isMobile = useIsMobile();
 * if (isMobile) { ...mobile specific logic... }
 */
export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean>(false);

  React.useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);

    // Update state whenever the media query match changes
    const handleChange = (e: MediaQueryListEvent | MediaQueryList) => {
      setIsMobile(e.matches);
    };

    // Initial check
    handleChange(mediaQuery);

    // Listen for changes
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return isMobile;
}
