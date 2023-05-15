namespace MicroBitLoggers {
    export namespace DataLogger {
        export class DataLogger implements MicroBitLogger.ILogger {
            constructor() {
                // we need to erase the data first before logging
                // otherwise the columns are all weird and we can't log
                
                datalogger.deleteLog()
                datalogger.setColumns([
                    "type",
                    "source",
                    "message"
                ])
            }

            
            public log(type: MicroBitLogger.LogType, source: string, message: string) {
                datalogger.logData([
                    datalogger.createCV("type", type.toString()),
                    datalogger.createCV("source", source),
                    datalogger.createCV("message", message)
                ])
            }
        }

        //% block="create data logger"
        //% blockSetVariable="data logger"
        export function createDataLogger(): DataLogger {
            return new DataLogger()
        }
    }
}