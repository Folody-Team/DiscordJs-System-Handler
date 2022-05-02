import { Error } from '../utils/error/Error';
export function ErrorHandler(client: any, dirname: string, err: any, prefix: string, func: Function): void
{
    /**
     * @param {any}
     * @returns {void}
     * @description
     * This is the error handler for the project.
     * It is used to handle the errors.
     * @example
    */
    Error.ClientError(client);
    /**
     * @param {string} dirname
     * @param {any} err
     * @returns {void}
     * @description
     */
    Error.UnknownError(dirname, err);
    /**
     * @param {string} dirname
     * @returns {void}
     * @description
     */
    Error.DirnameError(dirname);
    /**
     * @param {string} prefix
     * @returns {void}
     * @description
    */
    Error.PrefixError(prefix);
    /**
     * @param {Function} func
     * @returns {void}
     * @description
     * @example
     */
    Error.FunctionError(func);

}