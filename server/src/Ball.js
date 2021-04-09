import { Game } from "./Game.js";

export class Ball {
    static WIDTH = 12;
    static HEIGHT = 12;

    yDelta = 2;
    xDelta = 3;

    constructor(game, x, y) {
        this.game = game;
        this.x = x;
        this.y = y;
    }

    move() {
        this.x += this.xDelta;
        this.y += this.yDelta;

        if (this.y < 0 || this.y > Game.HEIGHT) {
            this.yDelta = -this.yDelta;
        }

        if (this.x < 0 || this.x > Game.WIDTH) {
            this.xDelta = -this.xDelta;
        }

        const message = JSON.stringify({
            type: "BALL_POSITION_UPDATE",
            payload: { x: this.x, y: this.y },
        });

        this.game.broadcast(message);
    }
}
