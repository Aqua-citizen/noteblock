const { Listener } = require('discord-akairo');

module.exports = class trackStart extends Listener {
  constructor() {
    super('playerMove', {
      event: 'playerMove',
      emitter: 'erela',
    });
  }

  async exec(player, oldChannel, newChannel) {
    this.client.logger.info(`PLAYER MOVED TO [${newChannel}]`);
    /* eslint no-param-reassign: "off" */
    player.voiceChannel = newChannel;
    setTimeout(() => player.pause(false), 3000);
  }
};
