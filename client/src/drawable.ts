export interface Drawable {
    draw: (canvasContext: CanvasRenderingContext2D, xPosition: number) => void;
}
