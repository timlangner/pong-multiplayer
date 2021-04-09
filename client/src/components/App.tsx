import React, { useEffect, useState } from "react";
import Canvas from "./canvas/Canvas";
import "./app.scss";
import { Ball } from "../../../server/src/Ball";

type BallPosition = {
    x: number;
    y: number;
};

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

            // Check if message event is for paddle position update
            switch (message.type) {
                case "POSITION_UPDATE":
                    let yPosition = message.data.y;
                    setEnemyPosition(yPosition);
                    break;
                case "BALL_POSITION_UPDATE":
                    setBallPosition(message.data);
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
