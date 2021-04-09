import WebSocket from "ws";
import { Game } from "./Game";

export class Player {
    y = 0;

    constructor(
        private readonly game: Game,
        private readonly connection: WebSocket
    ) {
        connection.on("message", (message) => {
            const decodedMessage = JSON.parse(message.toString());

            switch (decodedMessage.type) {
                case "POSITION_UPDATE":
                    this.updateYPosition(decodedMessage.payload.y);
                    break;
            }
        });
    }

    public updateYPosition(newYPosition: number) {
        this.y = newYPosition;

        const message = JSON.stringify({
            type: "ENEMY_POSITION_UPDATE",
            payload: { y: newYPosition },
        });

        this.game.broadcast(message, [this]);
    }

    public sendMessage(message: string) {
        this.connection.send(message);
    }
}
