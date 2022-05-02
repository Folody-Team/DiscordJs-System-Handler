"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileSystem = void 0;
const fs = Promise.resolve().then(() => __importStar(require('fs'))).then((function (fs) { return fs; })());
const Error_handler_1 = require("../handler/Error.handler");
const path = __importStar(require("path"));
class FileSystem {
    static init(dirname) {
        return path.join(process.cwd(), dirname);
    }
    static prefix(prefix) {
        return prefix;
    }
    static setup(dirname, client, prefix, func) {
        /**
         * @param {string} dirname
         * @param {any} client
         * @param {string} prefix
         * @returns {void}
         */
        (0, Error_handler_1.ErrorHandler)(client, dirname, fs, prefix, func);
        const dir = this.init(dirname);
        const pre = this.prefix(prefix);
        client.on('messageCreate', (message) => {
            if (message.content.startsWith(pre)) {
                const args = message.content.slice(1).split(" ");
                const command = args.shift().toLowerCase();
                if (command) {
                    fs.then(fs => fs.readFile(`${dir}/${command}.js`, 'utf8', (err, data) => {
                        if (err)
                            return message.channel.send('Command not found!');
                        else {
                            eval(`(function() {${data}}())`);
                        }
                    }));
                }
            }
        });
        func();
    }
}
exports.FileSystem = FileSystem;
