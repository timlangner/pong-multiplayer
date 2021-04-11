import { Game } from "./Game";

export class Ball {
    static HEIGHT = 15;
    static WIDTH = 15;

    private xPosition = Game.HEIGHT / 2;
    private yPosition = Game.WIDTH / 2;

    draw(canvasContext: CanvasRenderingContext2D) {
        canvasContext.fillRect(
            this.xPosition - Ball.WIDTH / 2,
            this.yPosition - Ball.HEIGHT / 2,
            Ball.WIDTH,
            Ball.HEIGHT
        );
    }

    setPosition(newXPosition: number, newYPosition: number) {
        this.xPosition = newXPosition;
        this.yPosition = newYPosition;
    }
}
