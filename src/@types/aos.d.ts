declare module 'aos' {
    export function init(options?: {
        duration?: number; // animation duration in milliseconds
        easing?: string; // easing function
        once?: boolean; // whether animation should happen only once
        mirror?: boolean; // whether elements should animate on scroll back
        anchorPlacement?: string; // defines which position of the element should trigger the animation
    }): void;

    export function refresh(): void; // optional: to refresh the AOS instance
}