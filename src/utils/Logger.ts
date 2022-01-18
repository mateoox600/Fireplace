import { Request, Response, NextFunction } from 'express';
import Colors from './Colors';

export default class Logger {

    private Prefixs = {
        Info: `${Colors.FgCyan}Info${Colors.Reset}`,
        Warning: `${Colors.FgYellow}Warning${Colors.Reset}`,
        Error: `${Colors.FgRed}Error${Colors.Reset}`,
        Get: `${Colors.FgGreen}Get${Colors.Reset}`
    };

    private print(str: string, prefix: keyof typeof this.Prefixs) {
        process.stdout.write(`${this.Prefixs[prefix]} - ${str}\n`);
    }

    public log(str: string) {
        this.print(str, 'Info');
        //console.log(`${Colors.FgCyan}Info${Colors.Reset} - ${str}`);
    }

    public warning(warn: string) {
        this.print(warn, 'Warning');
        //console.log(`${Colors.FgYellow}Warning${Colors.Reset} - ${warn}`);
    }

    public error(err: string) {
        this.print(err, 'Error');
        //console.log(`${Colors.FgRed}Error${Colors.Reset} - ${err}`);
    }

    public logCallback(req: Request, res: Response, next: NextFunction) {
        this.print(req.originalUrl, 'Get');
        //console.log(`${Colors.FgGreen}${req.method}${Colors.Reset} - ${req.originalUrl}`);
        next();
    }

}