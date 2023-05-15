namespace MicroBitLoggers {
    export namespace SerialLogger {
        export class SerialLogger implements MicroBitLogger.ILogger {
            constructor() {
                MicroBitLogger.addLoggerToList(this)
            }

            //% block="log to serial console with type of $type from $source $message"
            public log(type: MicroBitLogger.LogType, source: string, message: string) {
                serial.writeLine(`${type.toString()} log | ${source}: ${message}`)
            }
        }
    }
}