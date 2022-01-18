"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Colors_1 = __importDefault(require("./Colors"));
class Logger {
    constructor() {
        this.Prefixs = {
            Info: `${Colors_1.default.FgCyan}Info${Colors_1.default.Reset}`,
            Warning: `${Colors_1.default.FgYellow}Warning${Colors_1.default.Reset}`,
            Error: `${Colors_1.default.FgRed}Error${Colors_1.default.Reset}`,
            Get: `${Colors_1.default.FgGreen}Get${Colors_1.default.Reset}`
        };
    }
    print(str, prefix) {
        process.stdout.write(`${this.Prefixs[prefix]} - ${str}\n`);
    }
    log(str) {
        this.print(str, 'Info');
        //console.log(`${Colors.FgCyan}Info${Colors.Reset} - ${str}`);
    }
    warning(warn) {
        this.print(warn, 'Warning');
        //console.log(`${Colors.FgYellow}Warning${Colors.Reset} - ${warn}`);
    }
    error(err) {
        this.print(err, 'Error');
        //console.log(`${Colors.FgRed}Error${Colors.Reset} - ${err}`);
    }
    logCallback(req, res, next) {
        this.print(req.originalUrl, 'Get');
        //console.log(`${Colors.FgGreen}${req.method}${Colors.Reset} - ${req.originalUrl}`);
        next();
    }
}
exports.default = Logger;
