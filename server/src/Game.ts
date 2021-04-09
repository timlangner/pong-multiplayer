import { Ball } from "./Ball.js";
import { Player } from "./Player.js";

export class Game {
    private static TICK_RATE = 16;
    public static WIDTH = 800;
    public static HEIGHT = 600;

    ball: Ball;
    players = new Set<Player>();

    tickInterval?: NodeJS.Timeout;

    constructor() {
        this.ball = new Ball(this, Game.WIDTH / 2, Game.HEIGHT / 2);
    }

    private startGame() {
        this.tickInterval = setInterval(() => {
            this.tick();
        }, Game.TICK_RATE);
    }

    public addPlayer(player: Player) {
        this.players.add(player);

        if (!this.tickInterval) {
            this.startGame();
        }
    }

    private tick() {
        this.ball.move();
    }

    public broadcast(message: string, exceptionList = [] as Array<Player>) {
        this.players.forEach((player) => {
            if (!exceptionList.includes(player)) {
                player.sendMessage(message);
            }
        });
    }
}
