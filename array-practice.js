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
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > target) i++;  // skip overly large #'s & dont loop
        for(let j = i + 1; j < arr.length - 1; j++) {
            if(arr[i] + arr[j] === target) return true;
        }
        return false;
    }
};
// Time Complexity: O(n^2) - must examine all combinations w nested loop
// Space Complexity: O(1) - return just a boolean

// const arr = [11, 4, 2, 3, 6, 9]; 
// console.log(twoSum(arr, 10)); // => True
// console.log(twoSum(arr, 16)); // => False


let sorted = [];
// HELPER FUNCTION, or use arr.sort() lines 149-151 \/
const sortAscending = arr => {

    // BASE CASE: original array is empty
    if(arr.length === 0) return sorted;

    // RECURSIVE CASE: find lowest number & push into new arr
    let smallest = Infinity;
    let index = 0;
    for(let i = 0; i < arr.length; i++) {
        let current = arr[i];
        console.log(current);
        if(current < smallest) smallest = current;
        console.log(smallest);
        index = arr.indexOf(smallest);
        console.log(index);
    }

    arr.splice(index, 1);   // remove smallest # from arr
    console.log(arr);
    sorted.push(smallest);  // construct new array in order
    console.log(sorted);
    return sortAscending(arr);
};

const secondLargest = arr => {
    if(arr.length === 0) return undefined;
    let sorted = sortAscending(arr);
    console.log(sorted);
    return sorted[sorted.length - 2];
    // let sorted = arr.sort();    // easy method
    // console.log(sorted);
    // return sorted[sorted.length - 2];
}

// Time Complexity: O(n^2) - assume sort() method uses nested loop
// Space Complexity: O(1) - returning 1 number

// const arr = [4, 2, 3, 6, 8];
// console.log(sortAscending(arr));
// console.log(secondLargest(arr)); // => 6


const shuffle = (arr) => {
    let indexObj = {};
    
    for(let i = 0; i < arr.length; i++) {
        let randNum = Math.random();
        console.log(randNum);
        console.log(i);
        indexObj[i] = randNum;
    }   // generate object with i as keys and random values
    console.log(indexObj);
    
    // sort i keys in ascending order
    let shuffleOrder = [];
    let randoms = Object.values(indexObj);
    console.log(randoms);
    let sorted = randoms.sort();
    console.log(sorted);

    for(let i = 0; i < randoms.length; i++) {
        console.log(randoms.indexOf(sorted[i]))
        indexObj[randoms.indexOf(sorted[i])] = randoms[i];
    }
    console.log(indexObj);
    shuffleOrder.push();
    
    console.log(shuffleOrder);

    // manual sorting takes 2 loops or recursion \/
    // let shuffleOrder = [];
    // let smallest = Infinity;
    // let index;
    // for(let i in indexObj) {
    //     let value = indexObj[i];
    //     // console.log(value);
    //     if(value < smallest) {
    //         value = smallest;
    //         index = i;
    //     }
    // }
    // console.log(index);
    // shuffleOrder.push(index);
};
// Time Complexity: O() - 
// Space Complexity: O() - 

const arr = [2, 5, 1, 3, 4, 7];
console.log(shuffle(arr)); // => [2, 3, 5, 4, 1, 7]


module.exports = [findMinimum, runningSum, evenNumOfChars, smallerThanCurr, twoSum, secondLargest, shuffle];
