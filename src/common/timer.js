export const timer = {
    start(callback, interval) {
        if (this.timerId) {
            this.stop();
        }
        this.timerId = setTimeout(callback, interval);
    },

    stop() {
        if (this.timerId) {
            clearTimeout(this.timerId);
            this.timerId = null;
        }
    }
}