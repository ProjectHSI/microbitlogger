//% color=190 weight=100 icon="\uf120" block="Logger"
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

    let loggerClasses: ILogger[] = []

    export function addLoggerToList(logger: ILogger) {
        loggerClasses.push(logger)
    }

    //% block="generate sources string from $sources"
    //% blockId=uBitLogger_generate_source
    export function generateSource(sources: string[]) {
        return sources.join(":")
    }

    //% block="log | type = $type source = $source message = $message"
    //% blockId=uBitLogger_log_to_all
    //% source.shadow=uBitLogger_generate_source
    //% inlineInputMode=external
    export function logToAll(type: LogType, source: string, message: string) {
        loggerClasses.forEach((logger) => {
            logger.log(type, source, message)
        })
    }
}