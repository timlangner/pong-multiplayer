import { Game } from "./Game";
import { Drawable } from "./drawable";

export class Player implements Drawable {
    static HEIGHT = 100;
    static WIDTH = 10;

    private yPosition = Game.HEIGHT / 2;

    draw(canvasContext: CanvasRenderingContext2D, xPosition: number) {
        // Draw new updated paddle
        canvasContext.fillRect(
            xPosition,
            this.yPosition - Player.HEIGHT / 2,
            Player.WIDTH,
            Player.HEIGHT
        );
    }

    setYPosition(newYPosition: number) {
        this.yPosition = newYPosition;
    }
}
