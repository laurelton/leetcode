# Subjects to Study

## Strings

- Prefix trees (Tries)
- Suffix trees

Shift characters (Caesar Cipher)

```js
const shiftWord = (str) => {
    if (str.length === 1) return 'a';

    const a = 'a'.charCodeAt(0);
    const shift = a - str[0].charCodeAt(0) + 26;
    const getCode = (char) => 
        String.fromCharCode(a + ((char.charCodeAt(0) - a + shift) % 26));

    return str.split('').map(getCode).join('');
};

caesarCipher = (shift) => {
    return (char) => {
        if (char.toUpperCase() === char.toLowerCase()) {
            return null;
        }

        if (shift < 0) shift += 26;

        const a = 'a'.charCodeAt(0);
        const offset = (char.charCodeAt(0) - a + shift) % 26;
        const code = a + offset;

        return String.fromCharCode(code);
    };
};
```

## Arrays 

Prefix sums
```js
const nums = [1,2,3,-4,8];
const prefixSums = [0].concat(
    nums.map( (prfx = 0, (n) => prfx += n) )
);
```

### Matrices

- Saddleback search
Links:
 - https://www.cs.utexas.edu/users/EWD/ewd09xx/EWD934.PDF
 - https://www.geeksforgeeks.org/saddleback-search-algorithm-in-a-2d-array/

- Diagonals = col - row

```js
const diags = [
    [20, 30, 40, 50],
    [10, 21, 31, 41],
    [0, 11, 22, 32]
];

const getDiagonals = (arr) => {
    const M = arr.length;
    const N = arr[0].length;
    const output = Array.from({ length: M + N - 1 }, () => new Array());

    for (let col = 0; col < N; col += 1) {
        for (let row = M - 1; row >= 0; row -= 1) {
            const idx = col - row + M - 1;
            output[idx].push(arr[row][col]);
        }
    }

    return output;
};
```

- Antidiagonals = col + row

```js
const antiDiags = [
    [0, 11, 22, 32, 42],
    [10, 21, 31, 41, 51],
    [20, 30, 40, 50, 60],
];

const getAntidiagonals = (arr) => {
    const M = arr.length;
    const N = arr[0].length;
    const output = Array.from({ length: M + N - 1 }, () => new Array());

    for (let col = 0; col < N; col += 1) {
        for (let row = 0; row < M; row += 1) {
            const idx = col + row;
            output[idx].push(arr[row][col]);
        }
    }

    return output;
};
```

- Traverse in order with one var

```js
for (let i = 0; i < arr.length * arr[0].length; i += 1){
    const row = Math.floor(i / arr[0].length);
    const col = i % arr[0].length;

    const curr = arr[row][col];
}
```

### Sorting

[Sorting algorithms](./Sorting.md)

## Encoding

Base64 encoding

1. Create a string to represent all the characters use in the encoding scheme.
    - Upper case letters
    - Lower case letters
    - Digits
    - Plus sign (+)
    - Slash (/)
1. Make string length divisible by three by appending null bytes.
    - Note how many characters needed to be appended
1. Iterate over the string in 3 character segments.
1. Combine the three 8-bit characters into one 24-bit number.
1. Divide the 24 bit number into 4 6-bit segments.
1. Use the 6-bit numbers as indices of the characters in the encoding scheme.
1. If the input string was padded, truncate the encoded string by the number of 
padded characters.
1. Replace the truncated characters with the equal sign (=).

Base64 decoding

1. Replace any equal signs at the end of the string with capital a (A).
1. Iterate over the string in 4 character segments.
1. Find the index of the character in the encoding scheme string.
1. Combine the 4 6-bit indices into one 24-bit number.
1. Turn the 24-bit number into 3 8-bit characters.

## Trees

- Inorder traversal iterative
- Preorder traversal iterative
- Postorder traversal iterative
- Level order travel iterative
- Level order traversal recursive
- Morris traversal

### Novel Solutions

[Construct Binary Tree From Preorder and Inorder](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/solutions/34543/Simple-O(n)-without-map/)
[Construct Binary Tree From Preorder and Inorder](https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/solutions/758465/javascript-concise-solution/)

## Bitwise Manipulation
 
 - Two's complement
 - XOR
 
## Backtracking

 Template

 ```js
 const result = [];

const solve = (state) => {
    if (state === SOLVED) {
        result.push(state);
        return;
    }

    while (state === UNSOLVED) {
        state = updateState(state);
        solve(state);
        state = undoUpdate(state);
    }
};

solve(state);

 return result;
 ```

 ## Heaps

 - Left child = `i * 2 + 1`
 - Right child = `i * 2 + 2`
 - Parent node = `floor((i - 1) / 2)`
 - Last index of non-leaf node = `floor(n / 2) - 1`
    - All nodes after this element are leaf nodes

### Heap Implementation

```js

```

## Graphs

- Quick Find
- Quick Union
- Union by Rank
- Path Compression
- Traverse all vertices
- Traverse all paths
- Depth First Search (DFS)
    - Iterative
    - Recursive
- Breadth First Search (BFS)
- Minimum Spanning Tree
- Shortest Path Algorithms
    - BFS
    - Dijkstra's Algorithm
    - Bellman Ford Algorithm
    - Floyd Warshall Algorithm

|                                | BFS         | Dijkstra       | Bellman <br /> Ford | Floyd <br /> Warshall          |
|:-------------------------------|:-----------:|:--------------:|:-------------------:|:-----------------:|
| Complexity                     | _O(V+E)_    | _O((V+E)logV)_ | _O(VE)_             | _O(V<sup>3</sup>)_             |
| Recommended Size               | Large       | Large / Medium | Medium / Small      | Small              |
| All Pairs Shortest Path        | :x:         | Ok             | Poor                | **Yes**            |
| Detect Negative Cycles         | :x:         | :x:            | :white_check_mark:  | :white_check_mark: |
| Shortest Path Weighted Edges   | :x:         | **BEST**       | Acceptable          | Poor               |
| Shortest Path Unweighted Edges | **BEST**    | Ok             |  Poor               | Poor               |