
function solution(N, relation, dirname) {
    const answer = [];
    const nodes = [];
    const directoryMap = {};

    const root = {
        name: dirname[0],
        depth: 0,
        parent: null,
    };
    nodes.push(root);

    for (let i = 0; i < N; i++) {
        if (!relation[i]) continue;

        const [parent, child] = relation[i];
        const parentNode = nodes.find((node) => node.name === dirname[parent - 1]);
        const childNode = {
            name: dirname[child - 1],
            depth: parentNode.depth + 1,
            parent: parentNode.name,
        };

        nodes.push(childNode);
    };

    console.log(nodes);

    // nodes를 이용해서 directoryMap을 만든다.
    nodes.forEach((node) => {
        if (node.depth in directoryMap)
            directoryMap[node.depth].push(node.name);
        else
            directoryMap[node.depth] = [node.name];
    });

    console.log(directoryMap);
}

const N = 5;
const relation = [
    [1, 2],
    [1, 3],
    [2, 3],
    [2, 4],
];
const dirname = ["root", "abcd", "cs", "hello", "etc"];

console.log(solution(N, relation, dirname));