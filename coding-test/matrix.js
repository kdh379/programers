function rotate(matrix) {
    const n = matrix.length;

    for (let i = 0; i < Math.floor(n / 2); i++) {
        for (let j = i; j < n - i - 1; j++) {
            const temp = matrix[i][j];
            matrix[i][j] = matrix[n - j - 1][i];
            matrix[n - j - 1][i] = matrix[n - i - 1][n - j - 1];
            matrix[n - i - 1][n - j - 1] = matrix[j][n - i - 1];
            matrix[j][n - i - 1] = temp;
        }
    }
}

function solution(matrix, r) {
    if (!matrix.length || !matrix[0].length) {
        return matrix;
    }

    const rotations = r % 4; // 4번 회전하면 처음 위치로 돌아옴
    for (let i = 0; i < rotations; i++) {
        rotate(matrix);
    }

    return matrix;
}

const matrix = [
    [1, 2],
    [3, 4],
];
const r = 2;

console.log(solution(matrix, r));