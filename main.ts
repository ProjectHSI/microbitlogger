//% color=190 weight=100 icon="\uf120" block="Micro:Bit Logger"
declare namespace MicroBitLogger {
    enum LogType {
        ERROR,
        WARN,
        INFO,
        VERBOSE
    }

    function generateSource(sources: string[]) {
        return sources.join(":")
    }

    function log(type: LogType, source: string, message: string) {

    }
}