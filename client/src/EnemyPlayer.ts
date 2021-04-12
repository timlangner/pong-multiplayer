import { Player } from "./Player";
import { Game } from "./Game";

export class EnemyPlayer extends Player {
    draw(context: CanvasRenderingContext2D) {
        super.draw(context, Game.WIDTH - Player.WIDTH - 5);
    }
}
