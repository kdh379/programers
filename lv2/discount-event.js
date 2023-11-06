// Link : https://school.programmers.co.kr/learn/courses/30/lessons/131127

const DISCOUNT_DAYS = 10;

/**
 * 
 * @param {string[]} want 
 * @param {number[]} number 
 * @param {string[]} discount 
 * @returns 
 */
function solution(want, number, discount) {
    let answer = 0;
    const wantMap = {};

    want.forEach((value, index) => wantMap[value] = number[index]);

    discount.forEach((_, idx) => {
        const discountList = discount.slice(idx, idx + DISCOUNT_DAYS);

        const copyWantMap = { ...wantMap };

        discountList.forEach((value) => {
            if (value in copyWantMap)
                copyWantMap[value]--;
            if (copyWantMap[value] === 0)
                delete copyWantMap[value];
        });

        if (Object.keys(copyWantMap).length === 0) {
            answer++;
        }
    });

    return answer;
}

const want = ["banana", "apple", "rice", "pork", "pot"];
const number = [3, 2, 2, 2, 1];
const discount = ["chicken", "apple", "apple", "banana", "rice", "apple", "pork", "banana", "pork", "rice", "pot", "banana", "apple", "banana"];

console.log(solution(want, number, discount));