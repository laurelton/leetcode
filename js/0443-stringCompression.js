//	Time: 	 O(n)
//	Space:	 O(1)
/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    if (chars.length === 1) return 1;

    let write = 0;
    let read = 0;

    while (read < chars.length) {
        let count = 0;

        const curr = chars[read];
        while (read < chars.length && chars[read] === curr) {
            read += 1;
            count += 1;
        }

        chars[write++] = curr;
        if (count > 1) {
            const countArr = count.toString().split('');
            for (const digit of countArr) {
                chars[write++] = digit;
            }
        }
    }

    return write;
};

const testCases = [
    {
        input: ["a","a","b","b","c","c","c"],
        expectedInt: 6,
        expectedArr: ["a","2","b","2","c","3"],
     },
     {
        input: ["a"],
        expectedInt: 1,
        expectedArr: ["a"],
     },
     {
        input: ["a","b","b","b","b","b","b","b","b","b","b","b","b","0","0","7","J","B"],
        expectedInt: 4,
        expectedArr: ["a","b","1","2"],
     },
     {
        input: ["q","W","W","W","W","W","W","W","W","W","W","z"],
        expectedInt: 5,
        expectedArr: ["q", "W", "1", "0", "z"],
     },
];

for (const test of testCases) {
    const { input, expectedInt, expectedArr } = test;
    // console.log(input);
    const actualInt = compress(input);
    // console.log(expectedArr, expectedInt);
    console.log(input.slice(0, actualInt), actualInt);
}

// let test = ['a', 'a', 'b'];
// console.log(compress(test));
// console.log(test);

// test = ["a","a","b","b","c","c","c","D"];
// console.log(test);
// indx = compress(test);
// console.log(test);
// console.log(test.slice(0, indx));
