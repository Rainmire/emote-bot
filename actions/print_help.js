const helpMessages = require('../server_messages/help_messages');

const printHelp = (args, bot, channelId) => {
  let clientMessage;
  if (args.length > 2) {
    clientMessage = 'Invalid syntax. Type `?help` to list all commands ' +
    'or `?help <command>` to get more information about a specific command.';
  } else if (args.length === 2) {
    switch(args[1]) {
      case 'emote':
        clientMessage = helpMessages.emote
        break;
      case 'add':
        clientMessage = helpMessages.add;
        break;
      case 'delete':
        clientMessage = helpMessages.delete;
        break;
      case 'emotes':
        clientMessage = helpMessages.emotes;
        break;
      case 'gettoken':
        clientMessage = helpMessages.gettoken;
        break;
      case 'import':
        clientMessage = helpMessages.import;
        break;
      case 'help':
        clientMessage = helpMessages.help;
        break;
      default:
        clientMessage = helpMessages.invalid;
    }
  } else {
    clientMessage = helpMessages.listcommands;
  }
  bot.sendMessage({
    to: channelId,
    message: clientMessage
  });
}

module.exports = printHelp;