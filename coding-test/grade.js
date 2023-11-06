function solution(grade) {
    const answer = [];
    const sortedGrade = [...grade].sort((a, b) => b - a);
    const gradeMap = new Map();

    for (let i = 0; i < sortedGrade.length; i++) {
        const score = sortedGrade[i];

        if (!(score in gradeMap))
            gradeMap.set(score, i + 1);
    }

    grade.forEach((score) => {
        answer.push(gradeMap.get(score));
    });

    return answer;
}

const grade = [87, 89, 92, 100, 76];
console.log(solution(grade));