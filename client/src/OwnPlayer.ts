import { Player } from "./Player";

export class OwnPlayer extends Player {
    draw(context: CanvasRenderingContext2D) {
        super.draw(context, 0);
    }
}
