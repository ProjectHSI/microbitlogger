//% color=190 weight=100 icon="\uf120" block="Loggers"
namespace MicroBitLoggers {
    export namespace SerialLogger {
        export class SerialLogger implements MicroBitLogger.ILogger {
            constructor() {
                MicroBitLogger.addLoggerToList(this)
            }

            //% block="log to serial console with type of $type from $source $message"
            public log(type: MicroBitLogger.LogType, source: string, message: string) {
                serial.writeLine(`${MicroBitLogger.getStringFromLogType(type)} log | ${source}: ${message}`)
            }
        }
    }
}