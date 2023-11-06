
/**
 * 
 * @param {Object} obj
 * @returns {number} obj의 value 중 가장 큰 값
 */
function getMaxValue(obj) {
    return Math.max(...Object.values(obj)
        .map((values) => values.size));
}

function solution(orders) {
    const answer = [];
    const orderedMap = {};

    orders.forEach((order) => {
        const [user, ...foods] = order.split(" ");

        if (user in orderedMap) {
            const prev = orderedMap[user];
            // user가 존재할 경우 합집합을 구한다.
            orderedMap[user] = new Set([...prev, ...foods]);
        }
        else
            orderedMap[user] = new Set(foods);
    })

    const max = getMaxValue(orderedMap);

    Object.entries(orderedMap).filter(([key, value]) => {
        value.size === max && answer.push(key);
    });

    return answer;
}

const orders1 = ["alex pizza pasta steak", "bob noodle sandwich pasta", "choi pizza sandwich pizza", "alex pizza pasta steak"];
const orders2 = ["alex pizza pasta steak", "bob noodle sandwich pasta", "choi pizza sandwich pizza", "alex pizza pasta steak", "alex pizza pasta steak", "alex pizza pasta steak"];

console.log(solution(orders2));