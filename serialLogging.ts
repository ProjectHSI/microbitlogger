//% color=190 weight=100 icon="\uf120" block="Loggers"
namespace MicroBitLoggers {
    export namespace SerialLogger {
        class SerialLogger implements MicroBitLogger.ILogger {
            constructor() {
                MicroBitLogger.addLoggerToList(this)
            }

            //% block="log to serial console | type = $type source = $source message = $message"
            //% type.defl=MicroBitLogger.LogType.Info
            //% source.shadow=uBitLogger_generate_source
            //% inlineInputMode=external
            public log(type: MicroBitLogger.LogType, source: string, message: string) {
                serial.writeLine(`${MicroBitLogger.getStringFromLogType(type)} log | ${source} : ${message}`)
            }
        }

        //% block="create serial logger"
        //% blockSetVariable="serial logger"
        //% category="Serial Logger"
        export function createSerialLogger(): SerialLogger {
            return new SerialLogger()
        }
    }
}