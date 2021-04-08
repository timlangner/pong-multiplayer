import React, { useEffect, useState } from "react";
import Canvas from "./canvas/Canvas";
import "./app.scss";

const App = () => {
    const [enemyPosition, setEnemyPosition] = useState<number>(200);
    const [ws] = useState<WebSocket>(
        () => new WebSocket("ws://localhost:8999")
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
                    let yPosition = message.data.yPosition;
                    setEnemyPosition(yPosition);
                    break;
                default:
                    break;
            }
        };

        ws.onclose = () => {
            console.log("disconnected");
        };
    });

    return <Canvas ws={ws} enemyPosition={enemyPosition} />;
};

export default App;
