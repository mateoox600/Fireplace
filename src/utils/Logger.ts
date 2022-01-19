import { Request, Response, NextFunction } from 'express';
import Colors from './Colors';

export default class Logger {

    private Prefixs = {
        Info: `${Colors.FgCyan}Info${Colors.Reset}`,
        Warning: `${Colors.FgYellow}Warning${Colors.Reset}`,
        Error: `${Colors.FgRed}Error${Colors.Reset}`,
        Request: `${Colors.FgGreen}%r${Colors.Reset}`
    };

    private print(str: string, prefix: keyof typeof this.Prefixs, f: (prefix: string) => string = (p) => p) {
        process.stdout.write(`${f(this.Prefixs[prefix])} - ${str}\n`);
    }

    public log(str: string) {
        this.print(str, 'Info');
    }

    public warning(warn: string) {
        this.print(warn, 'Warning');
    }

    public error(err: string) {
        this.print(err, 'Error');
    }

    public logCallback(req: Request, res: Response, next: NextFunction) {
        this.print(req.originalUrl, 'Request', (prefix) => prefix.replace('%r', req.method));
        next();
    }

}