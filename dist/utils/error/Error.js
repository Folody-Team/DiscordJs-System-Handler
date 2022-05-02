"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Error = void 0;
const process_1 = require("process");
/**
 * This is error file for the project.
 * It is used to handle the errors.
 */
exports.Error = {
    /**
     * Unknown dir error
     * @description
     * @param {dir} dirname
     * @param {err} err
     */
    UnknownError: (dir, err) => {
        err.then((fs) => fs.readdir(`${process.cwd()}/${dir}`, (err, files) => {
            if (err)
                console.error("Unknown directory: " + `${process.cwd()}/${dir}`);
            process.exit(0);
            (0, process_1.exit)(0);
        }));
    },
    /**
     * Client error
     * @description
     * @param {client} client
     */
    ClientError: (client) => {
        if (!client)
            return 'Client is not defined';
        if (typeof client !== 'object')
            return console.error('client must be an object');
    },
    /**
     * Dirname string error
     * @description
     * @param {dir} dirname
     * @returns {void}
     */
    DirnameError: (dir) => {
        if (!dir)
            return 'Dirname is not defined';
        if (typeof dir !== 'string')
            return console.error('dirname must be a string');
    },
    /**
     * Prefix string error
     * @description
     * @param {prefix} prefix
     * @returns {void}
     */
    PrefixError: (prefix) => {
        if (!prefix)
            return 'Prefix is not defined';
        if (typeof prefix !== 'string')
            return console.error('prefix must be a string');
    },
    /**
     * Function error
     * @description
     * @param {func} func
     * @returns {void}
     */
    FunctionError: (func) => {
        if (!func) {
            'Function is not defined';
            (0, process_1.exit)(0);
        }
        ;
        if (typeof func !== 'function') {
            console.error('func must be a function');
            (0, process_1.exit)(0);
        }
    }
};
