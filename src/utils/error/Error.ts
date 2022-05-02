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
        err.then((fs: any) => fs.readDir(`${process.cwd()}/${dir}`, (err: any, files: any) => {
            if(err) return console.error(err);
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
        if(!func) return 'Function is not defined';
        if(typeof func!== 'function') return console.error('func must be a function');
    }
}