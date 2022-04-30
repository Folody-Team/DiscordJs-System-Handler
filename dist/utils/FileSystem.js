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
const fs = __importStar(require("fs"));
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
        if (!dirname || !client || !prefix)
            return console.error('Error: dirname, client, prefix are required');
        if (typeof dirname !== 'string')
            return console.error('dirname must be a string');
        if (typeof client !== 'object')
            return console.error('client must be an object');
        if (typeof prefix !== 'string')
            return console.error('prefix must be a string');
        const dir = this.init(dirname);
        const pre = this.prefix(prefix);
        client.on('messageCreate', (message) => {
            if (message.content.startsWith(pre)) {
                const args = message.content.slice(1).split(" ");
                const command = args.shift().toLowerCase();
                if (command) {
                    fs.readFile(`${dir}/${command}.js`, 'utf8', (err, data) => {
                        if (err) {
                            message.channel.send('Command not found!');
                        }
                        else {
                            eval('(function() {' + data + '}())');
                        }
                    });
                }
            }
        });
        func();
    }
}
exports.FileSystem = FileSystem;