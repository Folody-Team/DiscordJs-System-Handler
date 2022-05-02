import { exit } from "process";

/**
 * This is error file for the project.
 * It is used to handle the errors.
 */
export const Error = {
    /**
     * Unknown dir error
     * @description
     * @param {dir} dirname
     * @param {err} err
     */
    UnknownError: (dir: string, err: any) => {
        err.then((fs: any) => fs.readdir(`${process.cwd()}/${dir}`, (err: any, files: any) => {
            if(err) console.error("Unknown directory: " + `${process.cwd()}/${dir}`); process.exit(0); exit(0);
        }));
    },
    /**
     * Client error
     * @description
     * @param {client} client
     */
    ClientError: (client: any) => {
        if(!client) return 'Client is not defined';
        if(typeof client !== 'object') return console.error('client must be an object');
    },
    /**
     * Dirname string error
     * @description
     * @param {dir} dirname
     * @returns {void}
     */
    DirnameError: (dir: string) => {
        if(!dir) return 'Dirname is not defined';
        if(typeof dir!== 'string') return console.error('dirname must be a string');
    },
    /**
     * Prefix string error
     * @description
     * @param {prefix} prefix
     * @returns {void}
     */
    PrefixError: (prefix: string) => {
        if(!prefix) return 'Prefix is not defined';
        if(typeof prefix!== 'string') return console.error('prefix must be a string');
    },
    /**
     * Function error
     * @description
     * @param {func} func
     * @returns {void}
     */
    FunctionError: (func: Function) => {
        if(!func){'Function is not defined'; exit(0)};
        if(typeof func!== 'function'){console.error('func must be a function'); exit(0);}
    }
}