//% color=190 weight=100 icon="\uf120" block="Micro:Bit Logger"
namespace MicroBitLogger {
    export enum LogType {
        Error,
        Warn,
        Info,
        Verbose
    }

    export interface ILogger {
        log(type: LogType, source: string, message: string): void
    }

    export function generateSource(sources: string[]) {
        return sources.join(":")
    }
}