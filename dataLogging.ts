//% color=190 weight=100 icon="\uf120" block="Loggers"
namespace MicroBitLoggers {
    export namespace DataLogger {
        class DataLogger implements MicroBitLogger.ILogger {
            private is_flash_ready: boolean

            constructor() {
                this.is_flash_ready = false

                MicroBitLogger.addLoggerToList(this)
            }

            private initFlash() {
                // we need to erase the data first before logging
                // otherwise the columns are all weird and we can't log
                
                if (this.is_flash_ready) {
                    return
                }

                datalogger.deleteLog()
                datalogger.setColumns([
                    "type",
                    "source",
                    "message"
                ])
                this.is_flash_ready = true
            }

            //% block="log to flash log | type = $type source = $source message = $message"
            //% type.defl=MicroBitLogger.LogType.Info
            //% source.shadow=uBitLogger_generate_source
            //% inlineInputMode=external
            public log(type: MicroBitLogger.LogType, source: string, message: string) {
                this.initFlash() // will return prematurely if data logger is already ready
                datalogger.logData([
                    datalogger.createCV("type", MicroBitLogger.getStringFromLogType(type)),
                    datalogger.createCV("source", source),
                    datalogger.createCV("message", message)
                ])
            }
        }

        //% block="create data logger"
        //% blockSetVariable="data logger"
        //% category="Data Logger"
        export function createDataLogger(): DataLogger {
            return new DataLogger()
        }
    }
}