class Point {
   constructor(x, y) {
      this.x = x;
      this.y = y;
   }

   equals(point) {
      return this.x == point.x && this.y == point.y;


   }

   /**
    * Draws on the canvas with the given context and options.
    * 
    * @param {CanvasRenderingContext2D} ctx The 2D rendering context of the canvas.
    * @param {Object} options The options for drawing.
    * @param {number} [options.size=18] The size of the drawing.
    * @param {string} [options.color="black"] The color of the drawing.
    * @param {boolean} [options.outline=false] Whether the drawing should have an outline.
    */
   draw(ctx, { size = 18, color = "black", outline = false, fill = false } = {}) {

      // Now you can safely access methods and properties specific to HTMLCanvasElement
      const rad = size / 2;
      ctx.beginPath();
      ctx.fillStyle = color;
      ctx.arc(this.x, this.y, rad, 0, Math.PI * 2);
      ctx.fill();

      ctx.beginPath();
      ctx.lineWidth = 2
      ctx.strokeStyle = "red"
      ctx.arc(this.x, this.y, rad * 0.4, 0, Math.PI * 2)
      ctx.stroke();

      if (outline) {
         ctx.beginPath();
         ctx.lineWidth = 2
         ctx.strokeStyle = "yellow"
         ctx.arc(this.x, this.y, rad * 0.5, Math.PI * 2, Math.PI * 1)
         ctx.stroke();
      }

      if (fill) {
         // ctx.beginPath();
         // ctx.fillStyle = "yellow"
         // ctx.arc(this.x, this.y, rad * 0.4, 0, Math.PI * 2)
         // ctx.fill();

         ctx.beginPath();
         ctx.lineWidth = 4
         ctx.strokeStyle = "yellow"
         ctx.arc(this.x, this.y, rad * 0.8, 0, Math.PI * 2)
         ctx.stroke();
      }


   }
}