// Link : https://school.programmers.co.kr/learn/courses/30/lessons/12910?language=javascript

function solution(arr, divisor) {
    const answer = arr.filter((num) => num % divisor === 0);

    if (answer.length === 0)
        return [-1];

    answer.sort((a, b) => a - b);

    return answer;
}