import winston from 'winston'
import * as moment from 'moment'
import * as chalk from 'chalk'
import { isEmpty } from 'lodash'

export default class Logger {
    public static initLogFile = (filePath: string): void => {
        winston.add(winston.transports.File, {
            filename: filePath
        })
    }

    public static setLevel = (level: string): void => {
        switch (level) {
            case 'info':
                winston.level = 'info'
                break
            case 'warn':
                winston.level = 'warn'
                break
            case 'error':
                winston.level = 'error'
                break
            case 'verbose':
                winston.level = 'verbose'
                break
            case 'silly':
                winston.level = 'silly'
                break
            default:
                winston.level = 'debug'
        }
    }

    public static info = (title: string, ...bits: any[]): void => {
        winston.info(Logger.constructMessageTitle(title), ...bits)
    }

    public static warn = (title: string, ...bits: any[]): void => {
        winston.warn(chalk.yellow(Logger.constructMessageTitle(title)), ...bits)
    }

    public static error = (title: string, ...bits: any[]): void => {
        winston.error(chalk.red(Logger.constructMessageTitle(title)), ...bits)
    }

    public static debug = (title: string, ...bits: any[]): void => {
        winston.debug(chalk.green(Logger.constructMessageTitle(title)), ...bits)
    }

    public static verbose = (title: string, ...bits: any[]): void => {
        winston.verbose(Logger.constructMessageTitle(title), ...bits)
    }

    public static silly = (title: string, ...bits: any[]): void => {
        winston.silly(Logger.constructMessageTitle(title), ...bits)
    }

    // Colorize log output
    public static cyanify = (text: string): string => {
        return chalk.cyan(text)
    }
    public static greenify = (text: string): string => {
        return chalk.green(text)
    }
    public static yellowify = (text: string): string => {
        return chalk.yellow(text)
    }
    public static redify = (text: string): string => {
        return chalk.red(text)
    }
    public static magentify = (text: string): string => {
        return chalk.magenta(text)
    }
    public static bgBlueify = (text: string): string => {
        return chalk.bgBlue.white(text)
    }
    public static bgRedify = (text: string): string => {
        return chalk.bgRed.white(text)
    }
    public static bgGreenify = (text: string): string => {
        return chalk.bgGreen.black(text)
    }

    // Stylize log output
    public static bold = (text: string): string => {
        return chalk.bold(text)
    }
    public static italic = (text: string): string => {
        return chalk.italic(text)
    }

    private static constructMessageTitle = (title: string): string => {
        const timestamp = moment().format('HH:mm:ss')
        return `${chalk.magenta(timestamp + ' ' + title + ':')}`
    }
}
