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
    //% logType.defl=MicroBitLogger.LogType.Info
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
        return sources.join("::")
    }
    
    //% block="log | type = $type source = $source message = $message"
    //% blockId=uBitLogger_log_to_all
    //% type.defl=MicroBitLogger.LogType.Info
    //% source.shadow=uBitLogger_generate_source
    //% inlineInputMode=external
    export function logToAll(type: LogType, source: string, message: string) {
        loggerClasses.forEach((logger) => {
            logger.log(type, source, message)
        })
    }
}

//% color=190 weight=100 icon="\uf120" block="Loggers"
namespace MicroBitLoggers {
    //% block="log with specific logger | logger = $logger type = $type source = $source message = $message"
    //% blockId=uBitLogger_log_to_specific_logger
    //% logger.shadow=variables_get
    //% logger.defl=logger
    //% type.defl=MicroBitLogger.LogType.Info
    //% source.shadow=uBitLogger_generate_source
    //% inlineInputMode=external
    export function logToSpecificLogger(logger: MicroBitLogger.ILogger, type: MicroBitLogger.LogType, source: string, message: string) {
        // basically an abstraction for Block users to use created loggers
        logger.log(type, source, message)
    }
}