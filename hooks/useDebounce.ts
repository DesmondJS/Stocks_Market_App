'use client';

import { useCallback, useRef } from 'react';

//To avoid using API for every key we type in search bar, small delay be API calling
export function useDebounce(callback: () => void, delay: number) {
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    return useCallback(() => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = setTimeout(callback, delay);
    }, [callback, delay])
}