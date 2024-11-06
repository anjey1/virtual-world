/**
 * @typedef {import('../primitives/point')} Point
 */

/**
 * Gets nearest point to cursor
 * 
 * @param {Point} loc The canvas element to draw the graph on.
 * @param {Point[]} points The graph object that contains the points and drawing logic.
 */
function getNearestPoint(loc, points, threshold = 20) {
    let minDist = Number.MAX_SAFE_INTEGER;
    let nearest = null;

    for (const point of points) {
        const dist = calc_distance(point, loc)
        if (dist < minDist && dist < threshold) {
            minDist = dist
            nearest = point
        }
    }

    return nearest
}

function calc_distance(p1, p2) {
    return Math.hypot(
        p1.x - p2.x,
        p1.y - p2.y
    );
}