import { Player } from "./Player";
import { OwnPlayer } from "./OwnPlayer";
import { EnemyPlayer } from "./EnemyPlayer";
import { Ball } from "./Ball";

export class Game {
    static HEIGHT = 500;
    static WIDTH = 1000;

    private readonly context: CanvasRenderingContext2D;
    private ownPlayer: OwnPlayer;
    private enemyPlayer: EnemyPlayer;
    private ball: Ball;
    private wsConnection: WebSocket;

    constructor(private readonly canvas: HTMLCanvasElement) {
        const context = canvas.getContext("2d");
        if (!context) throw Error("Context not defined");
        this.context = context;
        this.ownPlayer = new OwnPlayer();
        this.enemyPlayer = new EnemyPlayer();
        this.ball = new Ball();
        this.draw();
        this.wsConnection = new WebSocket("ws://localhost:8080");

        this.wsConnection.onmessage = (messageEvent: MessageEvent<string>) => {
            let message = JSON.parse(messageEvent.data);

            // Check incoming websocket type
            switch (message.type) {
                case "ENEMY_POSITION_UPDATE":
                    const yPosition = message.payload.y;
                    this.enemyPlayer.setYPosition(yPosition);
                    this.draw();
                    break;
                case "BALL_POSITION_UPDATE":
                    this.ball.setPosition(message.payload.x, message.payload.y);
                    this.draw();
                    break;
                default:
                    break;
            }
        };

        this.handleMouseMove = this.handleMouseMove.bind(this);
        document.body.addEventListener("mousemove", this.handleMouseMove);
    }

    handleMouseMove(event: MouseEvent) {
        let clientY = event.clientY - this.canvas.getBoundingClientRect().top;

        // To prevent paddles from moving outside the canvas
        if (clientY <= Player.HEIGHT / 2) clientY = Player.HEIGHT / 2;
        if (clientY >= Game.HEIGHT - Player.HEIGHT / 2)
            clientY = Game.HEIGHT - Player.HEIGHT / 2;

        this.ownPlayer.setYPosition(clientY);
        if (this.wsConnection.readyState === WebSocket.OPEN) {
            this.wsConnection.send(
                JSON.stringify({
                    type: "POSITION_UPDATE",
                    payload: { y: clientY },
                })
            );
        }
        this.draw();
    }

    private nextFrame?: number;

    draw() {
        if (this.nextFrame) {
            cancelAnimationFrame(this.nextFrame);
        }

        this.nextFrame = requestAnimationFrame(() => {
            this.context.clearRect(0, 0, Game.WIDTH, Game.HEIGHT);

            this.ownPlayer.draw(this.context);
            this.enemyPlayer.draw(this.context);
            this.ball.draw(this.context);

            this.nextFrame = undefined;
        });
    }

    dispose() {
        document.body.removeEventListener("mousemove", this.handleMouseMove);
    }
}
