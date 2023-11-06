// Link : https://school.programmers.co.kr/learn/courses/30/lessons/176963

/**
 * 
 * @param {string[]} name 
 * @param {number[]} yearning 
 * @param {string[][]} photo 
 * @returns 
 */
function solution(name, yearning, photo) {
    const scoreMap = {};

    name.forEach((n, index) => scoreMap[n] = yearning[index]);

    return photo.map((p) => {
        let score = 0;

        p.map((value) => {
            if (value in scoreMap)
                score += scoreMap[value]
        });

        return score;
    });
}