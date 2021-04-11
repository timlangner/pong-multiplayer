import React, { useEffect, useRef } from "react";
import { Game } from "../../Game";
import "./canvas.scss";

const Canvas = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (canvasRef.current) {
            const game = new Game(canvasRef.current);

            // When unmounting, remove event listeners
            return () => {
                game.dispose();
            };
        }
    }, []);

    return (
        <div className="canvas-wrapper">
            <div className="canvas-border">
                <canvas
                    className="canvas"
                    ref={canvasRef}
                    width={1000}
                    height={500}
                />
            </div>
        </div>
    );
};

export default Canvas;
