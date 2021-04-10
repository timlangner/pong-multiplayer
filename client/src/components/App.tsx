import React, { useEffect, useState } from "react";
import Canvas from "./canvas/Canvas";
import type { BallPosition } from "../types/BallPosition";
import "./app.scss";

const App = () => {
    const [enemyPosition, setEnemyPosition] = useState<number>(200);
    const [ballPosition, setBallPosition] = useState<BallPosition>({
        x: 485,
        y: 235,
    });
    const [ws] = useState<WebSocket>(
        () => new WebSocket("ws://localhost:8080")
    );

    useEffect(() => {
        ws.onopen = () => {
            console.log("connected");
        };

        ws.onmessage = (messageEvent: MessageEvent<string>) => {
            // Get coordinates for second paddle back
            let message = JSON.parse(messageEvent.data);

            // Check incoming websocket type
            switch (message.type) {
                case "ENEMY_POSITION_UPDATE":
                    let yPosition = message.payload.y;
                    setEnemyPosition(yPosition);
                    break;
                case "BALL_POSITION_UPDATE":
                    setBallPosition(message.payload);
                    break;
                default:
                    break;
            }
        };

        ws.onclose = () => {
            console.log("disconnected");
        };
    });

    return (
        <Canvas
            ws={ws}
            enemyPosition={enemyPosition}
            ballPosition={ballPosition}
        />
    );
};

export default App;
