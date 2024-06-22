// write in comments the time complexities of any 
// Array operations you use. Evaluate the time and 
// space complexities of each problem after you 
// finish them. Ask yourself if the problem's time 
// and space complexities can be further optimized.


const findMinimum = arr => {
    if(arr.length === 0) return undefined;  // edge case empty
    let smallest = Infinity;
    
    arr.forEach(num => {
        if(num < smallest) {
            smallest = num;
        }
    })
    return smallest;
};
// Time Complexity: O(n) - must look thru whole array
// Space Complexity: O(1) - only returning one #

// const arr = [7, 5, 2, 3, 4, 1]; 
// console.log(findMinimum(arr)); // => 1
// console.log(findMinimum([-100, 10, -1000, 10000]))
// console.log(findMinimum([])); // => undefined


const runningSum = arr => {
    if(arr.length === 0) return [];
    let total = 0;
    let sums = [];

    arr.forEach(num => {
        total += num;
        sums.push(total);
    })
    return sums;
};
// Time Complexity: O(n) - go thru whole array
// Space Complexity: O(n) - construct a new array

// console.log(runningSum([])) // []);
// console.log(runningSum([1, 2])) // [1, 3]);
// console.log(runningSum([1, 2, 3, 4])) // [1, 3, 6, 10]);
// console.log(runningSum([1, 2, 3, 4, -2, -2])) // [1, 3, 6, 10, 8, 6]);
// console.log(runningSum([1, 2, 3, 4, -2, -2, -10])) // [1, 3, 6, 10, 8, 6, -4]);


const evenNumOfChars = arr => {
    let count = 0;
    arr.forEach(string => {
        if(string.length % 2 === 0) count++;
    })
    return count;
};
// Time Complexity: O(n) - must go thru array 
// Space Complexity: O(1) - return 1 number

// console.log(evenNumOfChars(['a', 'abc'])) // 0;
// console.log(evenNumOfChars(['ab', 'abcd'])) // 2;
// console.log(evenNumOfChars(['ab', 'abc', 'a', 'abcd'])) // 2;
// let loremIpsum = [];
// loremIpsum.push("Lorem ipsum dolor sit amet, consectetur adipiscing elit, ");
// loremIpsum.push("sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
// loremIpsum.push("Ut enim ad minim veniam, ");
// loremIpsum.push("quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");
// loremIpsum.push("Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.");
// loremIpsum.push("Excepteur sint occaecat cupidatat non proident, ");
// loremIpsum.push("sunt in culpa qui officia deserunt mollit anim id est laborum.");
// console.log(evenNumOfChars(loremIpsum)); // 5


const smallerThanCurr = arr => {
    let result = [];
    for(let i = 0; i < arr.length; i++) {
        let current = arr[i];
        console.log(current);
        let smallerCount = 0;
        for(let j = 0; j < arr.length; j++) {
            let compare = arr[j];
            console.log(compare);
            if(compare < current) {
                smallerCount++;
                // console.log(smallerCount);
            }
        }
        result.push(smallerCount);
    }
    console.log(result);
    return result;
};
// Time Complexity: O(n^2) - must use nested loop to 
//            compare each value with all the others
// Space Complexity: O(n) - construcing 1 array 

// const arr = [8,1,2,2,3];
// console.log(smallerThanCurr(arr)); // => [4,0,1,1,3]


const twoSum = (arr, target) => {
    

};
// Time Complexity: O() - 
// Space Complexity: O() - 

const secondLargest = arr => {


};
// Time Complexity: O() - 
// Space Complexity: O() - 

const shuffle = (arr) => {


};
// Time Complexity: O() - 
// Space Complexity: O() - 


module.exports = [findMinimum, runningSum, evenNumOfChars, smallerThanCurr, twoSum, secondLargest, shuffle];
