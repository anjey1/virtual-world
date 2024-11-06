/**
 * Class representing a Graph Editor that allows adding points to a graph and displaying the graph.
 */
class GraphEditor {
    /**
     * Creates an instance of the GraphEditor.
     * 
     * @param {HTMLCanvasElement} canvas The canvas element to draw the graph on.
     * @param {Graph} graph The graph object that contains the points and drawing logic.
     */
    constructor(canvas, graph) {
        /** @type {HTMLCanvasElement} */
        this.canvas = canvas;

        /** @type {Graph} */
        this.graph = graph;

        /** @type {CanvasRenderingContext2D} */
        this.ctx = this.canvas.getContext("2d");

        /** @type {Point|null} */
        this.selected = null;

        /** @type {Point|null} */
        this.hovered = null;

        this.#addEventListeners();
    }

    /**
     * Adds event listeners to the canvas for mouse interaction.
     * @private
     */
    #addEventListeners() {
        this.canvas.addEventListener("mousedown", (evt) => {
            const mouse = new Point(evt.offsetX, evt.offsetY);
            this.hovered = getNearestPoint(mouse, this.graph.points)
            if (this.hovered) {
                this.selected = this.hovered;
                return;
            }
            this.graph.addPoint(mouse);
            this.selected = mouse;
        });

        this.canvas.addEventListener("mousemove", (evt) => {
            const mouse = new Point(evt.offsetX, evt.offsetY);
            this.hovered = getNearestPoint(mouse, this.graph.points)
        });
    }

    /**
     * Displays the graph and the selected point (if any) on the canvas.
     */
    display() {
        this.graph.draw(this.ctx);
        if (this.hovered) {
            this.hovered.draw(this.ctx, { fill: true });
        }

        if (this.selected) {
            this.selected.draw(this.ctx, { outline: true });
        }
    }
}