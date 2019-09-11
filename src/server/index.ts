import alt from 'alt';

/**
 * This event is triggered when a player joins the server
 * @param {Player} player - The player who joined the server
 */
alt.on('playerConnect', (player: alt.Player) => {
  player.spawn(0, 0, 72, 0);
});
