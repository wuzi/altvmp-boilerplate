import game from 'natives';

export default async (): Promise<void> => {
  game.setPedDefaultComponentVariation(game.playerPedId());
};
