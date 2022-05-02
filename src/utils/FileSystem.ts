const fs = import('fs').then((function(fs) { return fs })());
import * as path from 'path';
export class FileSystem {
    static init(dirname: string): string {
        return path.join(process.cwd(), dirname);
    }
    static prefix(prefix: string): string {
        return prefix
    }
    static setup(dirname: string, client: any, prefix: string, func: Function): void {
        /**
         * @param {string} dirname
         * @param {any} client
         * @param {string} prefix
         * @returns {void}
         */
        if(!dirname || !client || !prefix) return console.error('Error: dirname, client, prefix are required');
        if(typeof dirname !== 'string') return console.error('dirname must be a string');
        if(typeof client !== 'object') return console.error('client must be an object');
        if(typeof prefix !== 'string') return console.error('prefix must be a string');

        const dir = this.init(dirname);
        const pre = this.prefix(prefix);

        client.on('messageCreate', (message: any) => {
            if(message.content.startsWith(pre)) {
                const args = message.content.slice(1).split(" ");
                const command: string = args.shift().toLowerCase();
                if(command){
                    fs.then(fs => fs.readFile(`${dir}/${command}.js`, 'utf8', (err, data: string) => {
                        if(err) return message.channel.send('Command not found!');
                        else {
                            eval(`(function() {${data}}())`);
                        }
                    }));
                }

            }
        })
        func();
    }
}