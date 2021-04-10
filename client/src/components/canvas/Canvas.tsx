import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import type { BallPosition } from "../../types/BallPosition";
import "./canvas.scss";

type WebsocketMessage<T> = {
    type: string;
    payload: T;
};

interface CanvasProps {
    ws: WebSocket;
    enemyPosition: number;
    ballPosition: BallPosition;
}

const Canvas = ({ ws, enemyPosition, ballPosition }: CanvasProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [context, setContext] = useState<CanvasRenderingContext2D | null>(
        null
    );
    const [canvasOffsetTop, setCanvasOffsetTop] = useState<number>(0);
    const [paddleYPosition, setPaddleYPosition] = useState<number>(0);

    useEffect(() => {
        if (context) {
            // Clear paddle
            context.clearRect(985, 0, 10, 500);

            // Clear path
            context.beginPath();

            // Draw enemy paddle
            context.fillRect(985, enemyPosition, 10, 100);
        }
    }, [context, enemyPosition]);

    useEffect(() => {
        if (context) {
            // Clear field
            context.clearRect(15, 0, 960, 500);

            // Clear path
            context.beginPath();

            // Draw ball
            context.fillRect(ballPosition.x, ballPosition.y, 15, 15);
        }
    }, [context, ballPosition]);

    useEffect(() => {
        // Check if cavas reference exists
        if (canvasRef.current) {
            const renderCtx = canvasRef.current.getContext("2d");

            if (renderCtx) {
                // Save canvas top-offset
                setCanvasOffsetTop(canvasRef.current.offsetTop);

                // save context to state
                setContext(renderCtx);
            }
        }

        // Draw start screen
        if (context) {
            // player 1
            context.fillRect(5, 200, 10, 100);

            // Save paddle position
            setPaddleYPosition(200);

            // player 2
            context.fillRect(985, 200, 10, 100);
        }
    }, [context]);

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        let mouseYPosition: number = event.clientY - canvasOffsetTop;

        if (context) {
            // To prevent paddles from moving outside the canvas
            if (mouseYPosition <= 50) mouseYPosition = 50;
            if (mouseYPosition >= 450) mouseYPosition = 450;

            // Clear paddle
            context.clearRect(5, paddleYPosition, 10, 500);

            // Clear path
            context.beginPath();

            // New updated paddle position
            const newPosition: WebsocketMessage<{ y: number }> = {
                type: "POSITION_UPDATE",
                payload: {
                    y: mouseYPosition - 50,
                },
            };

            // Send updated position to server
            if (ws.readyState === 1) {
                ws.send(JSON.stringify(newPosition));
            }

            // Draw new updated paddle
            context.fillRect(5, mouseYPosition - 50, 10, 100);

            // Save new paddle position
            setPaddleYPosition(mouseYPosition - 50);
        }
    };

    return (
        <div
            className="canvas-wrapper"
            onMouseMove={(event) => handleMouseMove(event)}
        >
            <canvas
                className="canvas"
                ref={canvasRef}
                width={1000}
                height={500}
            />
        </div>
    );
};

export default Canvas;

Canvas.propTypes = {
    ws: PropTypes.any,
};
