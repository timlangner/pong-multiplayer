import { Ball } from "./Ball.js";

export class Game {
    static TICK_RATE = 16;
    static WIDTH = 800;
    static HEIGHT = 600;

    constructor() {
        this.ball = new Ball(this, Game.WIDTH / 2, Game.HEIGHT / 2);
        this.players = new Set();
    }

    startGame() {
        this.tickInterval = setInterval(() => {
            this.tick();
        }, Game.TICK_RATE);
    }

    addPlayer(player) {
        this.players.add(player);

        if (!this.tickInterval) {
            this.startGame();
        }
    }

    tick() {
        this.ball.move();
    }

    broadcast(message, exceptionList = []) {
        this.players.forEach((player) => {
            if (!exceptionList.includes(player)) {
                player.sendMessage(message);
            }
        });
    }
}
