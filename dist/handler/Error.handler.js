"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorHandler = void 0;
const Error_1 = require("../utils/error/Error");
function ErrorHandler(client, dirname, err, prefix, func) {
    /**
     * @param {any}
     * @returns {void}
     * @description
     * This is the error handler for the project.
     * It is used to handle the errors.
     * @example
    */
    Error_1.Error.ClientError(client);
    /**
     * @param {string} dirname
     * @param {any} err
     * @returns {void}
     * @description
     */
    Error_1.Error.UnknownError(dirname, err);
    /**
     * @param {string} dirname
     * @returns {void}
     * @description
     */
    Error_1.Error.DirnameError(dirname);
    /**
     * @param {string} prefix
     * @returns {void}
     * @description
    */
    Error_1.Error.PrefixError(prefix);
    /**
     * @param {Function} func
     * @returns {void}
     * @description
     * @example
     */
    Error_1.Error.FunctionError(func);
}
exports.ErrorHandler = ErrorHandler;
