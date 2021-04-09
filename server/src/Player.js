export class Player {
    y = 0;

    constructor(game, connection) {
        this.game = game;
        this.connection = connection;

        connection.on("message", (message) => {
            const decodedMessage = JSON.parse(message);

            switch (decodedMessage.type) {
                case "POSITION_UPDATE":
                    this.updateYPosition(decodedMessage.payload.y);
                    break;
            }
        });
    }

    updateYPosition(newYPosition) {
        this.y = newYPosition;

        const message = JSON.stringify({
            type: "ENEMY_POSITION_UPDATE",
            payload: { y: newYPosition },
        });

        this.game.broadcast(message, [this]);
    }

    sendMessage(message) {
        this.connection.send(message);
    }
}
