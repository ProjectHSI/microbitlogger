namespace MicroBitLoggers {
    export namespace SerialLogger {
        export class SerialLogger implements MicroBitLogger.ILogger {
            //% block="log to serial console with type of $type from $source $message"
            public log(type: MicroBitLogger.LogType, source: string, message: string) {
                serial.writeLine(`${type.toString()} log | ${source}: ${message}`)
            }
        }

        //% block="create serial logger"
        //% blockSetVariable="serial logger"
        export function createSerialLogger(): SerialLogger {
            return new SerialLogger()
        }
    }
}