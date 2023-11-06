// Link : https://school.programmers.co.kr/learn/courses/30/lessons/178871
// 10 ~ 13 시간초과

const swap = (arr, i, j) => {
    [arr[i], arr[j]] = [arr[j], arr[i]];
};

function solution(players, callings) {
    const answer = players;

    for (let i = 0; i < callings.length; i++) {
        const calling = callings[i];

        const index = answer.indexOf(calling);
        swap(answer, index, index - 1);
    }

    return answer;
};