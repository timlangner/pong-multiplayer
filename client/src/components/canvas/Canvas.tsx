import React, {useEffect, useState, useRef} from 'react';
import PropTypes from "prop-types";
import './canvas.scss';

type PaddlePosition = {
    x: number;
    y: number;
}

interface CanvasProps {
    ws: WebSocket
}

const Canvas = ({ws}: CanvasProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [context, setContext] = useState<CanvasRenderingContext2D | null>(null)
    const [mouseYPosition, setMouseYPosition] = useState<number>(0);
    const [canvasOffsetTop, setCanvasOffsetTop] = useState<number>(0);
    const [paddle, setPaddle] = useState<PaddlePosition>({ x: 0, y: 0});

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        setMouseYPosition(event.clientY - canvasOffsetTop);
    }

    useEffect(() => {
        // Check if cavas reference exists
        if (canvasRef.current) {
            const renderCtx = canvasRef.current.getContext('2d');

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
            setPaddle({ x: 5, y: 200 });

            // player 2
            context.fillRect(985, 200, 10, 100);

            // ball
            context.fillRect(485, 235, 15, 15);
        }
    }, [context]);

    useEffect(() => {
        if (context) {
            // To prevent paddles from moving outside the canvas
            if (mouseYPosition <= 50) setMouseYPosition(50);
            if (mouseYPosition >= 450) setMouseYPosition(450);

            // Clear paddle
            context.clearRect(paddle.x, paddle.y, 10, 100);

            // Clear path
            context.beginPath();

            // New updated paddle position
            const newPosition: PaddlePosition = {x: 5, y: mouseYPosition - 50}

            // Send updated position to server
            // ws.send(JSON.stringify(newPosition));

            // Draw new updated paddle
            context.fillRect(5, mouseYPosition - 50, 10, 100);

            // Save new paddle position
            setPaddle(newPosition)
        }
    }, [context, mouseYPosition, paddle.x, paddle.y]);

    return (
        <div className="canvas-wrapper" onMouseMove={(event) => handleMouseMove(event)}>
            <canvas
                className="canvas"
                ref={canvasRef}
                width={1000}
                height={500}
            />
        </div>
    );
}

export default Canvas;

Canvas.propTypes = {
    ws: PropTypes.any,
}
