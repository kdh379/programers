// Link : https://school.programmers.co.kr/learn/courses/30/lessons/12981

/**
 * 
 * @param {number} n 
 * @param {string[]} words 
 */
function solution(n, words) {
    const usedWord = new Set();
    let lastChar = null;

    for (let i = 0; i < words.length; i++) {
        if (usedWord.has(words[i]) || (lastChar && lastChar !== words[i][0]))
            return [i % n + 1, Math.floor(i / n) + 1];

        usedWord.add(words[i]);
        lastChar = words[i].split("").pop();
    }

    return [0, 0];
}

const n = 2;
const words = ["hello", "one", "even", "never", "now", "world", "draw"];
console.log(solution(n, words));