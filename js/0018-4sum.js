//	Time: 	 O()
//	Space:	 O()
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    const result = new Set();
    if (nums.length < 4) return [];
    const N = nums.length;
    nums.sort((a, b) => a - b);

    for (let i = 0; i < N - 3; i += 1) {
        for (let j = i + 1; j < N - 2; j += 1) {
            const currSum = nums[i] + nums[j];
            const currTarget = target - currSum;
            const currResult = twoSum(nums, j + 1, N - 1, currTarget);

            if (currResult.length) {
                currResult.forEach(arr => {
                    values = [nums[i], nums[j]].concat(arr);
                    result.add(JSON.stringify(values));
                });
            }
        }
    }

    return Array.from(result).map(arr => JSON.parse(arr));
};

function twoSum(arr, left, right, target) {
    const result = [];
    while (left < right) {
        const currSum = arr[left] + arr[right];
        if (currSum === target) {
            result.push([arr[left], arr[right]]);
            
            while (arr[left] === arr[left + 1]) {
                left += 1;
            }
            left += 1;

            while (arr[right] === arr[right - 1]) {
                right -= 1;
            }
            right -= 1;
        } else if (currSum < target) {
            left += 1;
        } else {
            right -= 1;
        }
    }

    return result;
}

const testCases = [
    {
        input: {
            nums: [-3,-2,-1,0,0,1,2,3],
            target: 0,
        },
        expected: [[-3,-2,2,3],[-3,-1,1,3],[-3,0,0,3],[-3,0,1,2],[-2,-1,0,3],[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]],
    },
    {
        input: {
            nums: [1,0,-1,0,-2,2],
            target: 0,
        },
        expected: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]],
    },
    {
        input: {
            nums: [2,2,2,2,2],
            target: 8,
        },
        expected: [[2,2,2,2]],
    },
];

for (const {input: {nums, target}, expected} of testCases) {
    console.log(`Nums:      ${JSON.stringify(nums)}`);
    console.log(`Target:    ${target}`);
    console.log(`Expected:  ${JSON.stringify(expected)}`);
    const actual = fourSum(nums, target);
    console.log(`Actual:    ${JSON.stringify(actual)}`);
    console.log('\u3030'.repeat(50), '\n');
}

