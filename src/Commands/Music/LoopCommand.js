const { Command } = require('discord-akairo');
const { CreateEmbed } = require('../../Utility/CreateEmbed');

module.exports = class LoopCommand extends Command {
  constructor() {
    super('loop', {
      aliases: ['loop'],
      description: {
        content: 'loop guild queue',
      },
      category: 'Music',
      cooldown: 3000,
    });
  }

  async exec(msg) {
    try {
      const GuildPlayers = this.client.erela.players.get(msg.guild.id);
      if (!GuildPlayers) return msg.channel.send(CreateEmbed('info', '⛔ | There no music playing in this guild'));
      GuildPlayers.setQueueRepeat(!GuildPlayers.queueRepeat);
      return msg.channel.send(CreateEmbed('info', `👌 | ${GuildPlayers.queueRepeat ? 'Enabled loop' : 'Disabled loop'}`));
    } catch (e) {
      this.client.logger.error(e.message);
      return msg.channel.send(CreateEmbed('warn', '⛔ | An error occured'));
    }
  }
};