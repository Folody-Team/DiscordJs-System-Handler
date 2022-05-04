# DiscordJS System Handler

 A javascript library support System Files Handler Commands.

## What is System Files Handler Commands ?

> ### System Files Handler Commands
> 
> **Info:** As an alternative to [**Commands Handler**](https://discordjs.guide/creating-your-bot/command-handling.html), it reduces the amount of code and does not need `module.exports` and optimizes your code. 

## Example

```js
const { FileSystem } = require('discordjs-system-handler');
const { Client, Intents } = require('discord.js');

const client = new Client({intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_MESSAGES]});


FileSystem.setup('commands', client, '!', function() {
    client.on('ready', () => {
        console.log('Ready!');
    })
    client.login("TOKEN");
});
```

`FileSystem.setup(dirname, client, prefix, function)`

| Params   | Type     |
| -------- | -------- |
| dirname  | string   |
| client   | any      |
| prefix   | string   |
| function | function |

##### In example

You can see `commands` The library will read the directory containing the command files and correspond to the command name. That is, the user types the command name, the program will get the command name to read the command file contained in that directory. If there is none, it will be `NOT FOUND` 

### NOTE: command name = file name