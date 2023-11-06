// Link : https://school.programmers.co.kr/learn/courses/30/lessons/12951

/**
 * 
 * @param {string} s 
 */
function solution(s) {

    const answer = s.split(" ").map((word) => {
        if (!word.length)
            return "";

        return word[0].toUpperCase() + word.slice(1).toLowerCase()
    }).join(" ");


    return answer;
}

console.log(solution("3people unFollowed me"));
console.log(solution("for the  1ast week"));