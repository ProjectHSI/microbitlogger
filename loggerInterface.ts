namespace MicroBitLogger {
    export interface Logger {
        log(type: string, source: string, message: string): void,
        toggle(newState: boolean): void
    }
}