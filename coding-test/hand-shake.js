function solution(N) {
    if (N < 1) {
        return 0; // N이 1 미만인 경우 악수가 이루어질 방법이 없음
    }

    // 좌우로 앉아 있는 N명 중 2명을 선택하는 방법
    const handshakeWaysLeftRight = (N * (N - 1)) / 2;

    // 정면에 앉아 있는 2N명 중 2명을 선택하는 방법
    const handshakeWaysFront = (2 * N * (2 * N - 1)) / 2;

    // 모든 사람이 서로 악수하는 방법의 수를 계산
    const totalHandshakeWays = handshakeWaysLeftRight + handshakeWaysFront;

    return totalHandshakeWays;
}

const N = 3;
console.log(solution(N));