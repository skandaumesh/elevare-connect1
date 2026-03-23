"use client";
import { useRef, useEffect, useCallback } from "react";

export function useReveal() {
    const refs = useRef([]);

    const addToRefs = useCallback((el) => {
        if (el && !refs.current.includes(el)) {
            refs.current.push(el);
        }
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("active");
                    }
                });
            },
            { threshold: 0.15 }
        );

        refs.current.forEach((ref) => observer.observe(ref));
        return () => observer.disconnect();
    }, []);

    return addToRefs;
}
