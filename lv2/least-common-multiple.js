// link : https://programmers.co.kr/learn/courses/30/lessons/12953

const lcm = (a, b) => {
    const gcd = (a, b) => {
        if (b === 0)
            return a;
        return gcd(b, a % b);
    };

    return (a * b) / gcd(a, b);
}

function solution(arr) {
    let answer = 1;

    arr.forEach((num) => {
        answer = lcm(answer, num);
    });

    return answer;
}

const arr = [2, 6, 8, 14];
console.log(solution(arr));