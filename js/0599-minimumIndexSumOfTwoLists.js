//	Time: 	 O(n)
//	Space:	 O(n)
/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    const result = new Map();
    const list2Set = new Set(list2);
    let smallestSum = list1.length + list2.length;

    for (let i = 0; i < list1.length; i += 1) {
        if (list2Set.has(list1[i])) {
            const j = list2.indexOf(list1[i]);
            const currSum = i + j;
            smallestSum = Math.min(smallestSum, currSum);
            const words = result.get(currSum) ?? [];
            words.push(list1[i]);
            result.set(currSum, words);
        }
    }

    return result.get(smallestSum);    
};

const testCases = [
    {
        input: {
            list1: ["Shogun","Tapioca Express","Burger King","KFC"],
            list2: ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"],
        },
        expected: ["Shogun"],
    },
    {
        input: {
            list1: ["Shogun","Tapioca Express","Burger King","KFC"],
            list2: ["KFC","Shogun","Burger King"],
        },
        expected: ["Shogun"],
    },
    {
        input: {
            list1: ["happy","sad","good"],
            list2: ["sad","happy","good"],
        },
        expected: ["sad","happy"],
    },
];

for (const {input: {list1, list2}, expected} of testCases) {
    console.log(list1);
    console.log(list2);
    console.log(`Expected:	${expected}`);
    console.log(`Actual:  	${findRestaurant(list1, list2)}`);
    console.log('='.repeat(50), '\n');
}

