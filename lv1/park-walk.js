// Link : https://school.programmers.co.kr/learn/courses/30/lessons/172928

const START_POINT = "S";

/**
 * 
 * @param {string[]} park 
 * @returns {{ x: number, y: number }}
 */
const getStartPoint = (park) => {

    const coordinate = {
        y: 0,
        x: 0,
    }

    for (const p of park) {
        const index = p.indexOf(START_POINT);

        if (index !== -1) {
            coordinate.x = index;
            break;
        }

        coordinate.y++;
    }

    return coordinate;
}

/**
 * 
 * @param {{ x: number, y: number }} coordinate
 * @param {number} dx
 * @param {number} dy
 * @returns
*/
const move = (coordinate, dx, dy) => {
    const nextX = coordinate.x + dx;
    const nextY = coordinate.y + dy;

    // 범위를 벗어났을 경우
    if (nextX < 0 || nextX >= park[coordinate.y].length || nextY < 0 || nextY >= park.length)
        return;

    let hasObstacle = false;
    if (dx !== 0) {
        for (let x = coordinate.x; x <= nextX; x++) {
            if (park[coordinate.y][x] === "X") {
                hasObstacle = true;
                break;
            }
        }
    }
    else if (dy !== 0) {
        for (let y = coordinate.y; y <= nextY; y++) {
            if (park[y][coordinate.x] === "X") {
                hasObstacle = true;
                break;
            }
        }
    }

    if (!hasObstacle) {
        coordinate.x = nextX;
        coordinate.y = nextY;
    }
}

/**
 * 
 * @param {string[]} park 
 * @param {string[]} routes 
 * @returns {[number, number]}
 */
function solution(park, routes) {
    const coordinate = getStartPoint(park);

    routes.forEach((route) => {
        const [way, distance] = route.split(" ");
        const count = Number(distance);

        switch (way) {
            case "E": {
                move(coordinate, count, 0);
                break;
            }
            case "W": {
                move(coordinate, -count, 0);
                break;
            }
            case "N": {
                move(coordinate, 0, -count);
                break;
            }
            case "S": {
                move(coordinate, 0, count);
                break;
            }
        }
    })

    return Object.values(coordinate);
}

const park = ["SOOXO", "OOOXO", "OXOOO", "XOOOO"];
const routes = ["E 4", "S 2", "W 2"];
console.log(solution(park, routes));