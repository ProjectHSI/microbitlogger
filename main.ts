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

    //% block="get string from type $logType"
    //% blockId=uBitLogger_get_string_from_log_type
    export function getStringFromLogType(logType: LogType): string {
        switch (logType) {
            case LogType.Error:
                return "Error"
            case LogType.Warn:
                return "Warn"
            case LogType.Info:
                return "Info"
            case LogType.Verbose:
                return "Verbose"
        }
    }

    //% block="generate sources string from $sources"
    //% blockId=uBitLogger_generate_source
    export function generateSource(sources: string[]) {
        return sources.join(":")
    }

    //% block="log | type = $type source = $source message = $message"
    //% blockId=uBitLogger_log_to_all
    //% type.defl=LogType.Info
    //% source.defl=uBitLogger_generate_source
    //% inlineInputMode=external
    export function logToAll(type: LogType, source: string, message: string) {
        loggerClasses.forEach((logger) => {
            logger.log(type, source, message)
        })
    }
}