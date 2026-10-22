import { useLocation } from 'react-router-dom';
import { useEffect, useLayoutEffect } from 'react';

// useLayoutEffect warns during prerendering, where there is nothing to scroll anyway.
const useIsomorphicLayoutEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect;

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useIsomorphicLayoutEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, [pathname]);

    return null;
}

export default ScrollToTop;