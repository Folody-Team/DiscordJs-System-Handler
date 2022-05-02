const { FileSystem } = require('../lib/index.folody');
const { Client, Intents } = require('discord.js');

const client = new Client({intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_MESSAGES]});


FileSystem.setup('commands', client, '!', function() {
    client.on('ready', () => {
        console.log('Ready!');
    })
    client.login("TOKEN");
});