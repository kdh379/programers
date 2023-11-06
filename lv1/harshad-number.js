// Link : https://school.programmers.co.kr/learn/courses/30/lessons/12947

function solution(x) {

    const harshad = x.toString().split('').reduce((acc, cur) => acc + parseInt(cur), 0);

    if (x % harshad !== 0)
        return false;

    return true;
}