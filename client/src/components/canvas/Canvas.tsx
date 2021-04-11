import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import "./canvas.scss";
import { Game } from "../../Game";

const Canvas = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (canvasRef.current) {
            const game = new Game(canvasRef.current);

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

Canvas.propTypes = {
    ws: PropTypes.any,
};
