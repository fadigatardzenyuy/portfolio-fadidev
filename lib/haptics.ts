/**
 * Simple utility for mobile haptics using the Web Vibration API.
 */
export const haptics = {
    /**
     * A very subtle tap (10ms)
     */
    light: () => {
        if (typeof navigator !== 'undefined' && navigator.vibrate) {
            navigator.vibrate(10);
        }
    },
    /**
     * A medium impact (20ms)
     */
    medium: () => {
        if (typeof navigator !== 'undefined' && navigator.vibrate) {
            navigator.vibrate(20);
        }
    },
    /**
     * A double tap for success/confiramtion
     */
    success: () => {
        if (typeof navigator !== 'undefined' && navigator.vibrate) {
            navigator.vibrate([10, 30, 10]);
        }
    }
};
