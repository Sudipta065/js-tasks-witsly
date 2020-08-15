/** 2nd Task */
/* IF I want to destructure the Array */

let [first, second] = [5, [[4], 6]];
console.log("Second Task");
console.log("Destructured Array :", first, second);

/* IF I want to declare variable for every elements in the array */

let [newFirst, [[newSecond], newThird]] = [5, [[4], 6]];

console.log(
  "When Every element is a variable :",
  newFirst,
  newSecond,
  newThird
);
console.log("----------");
/**3rd Task*/

let ages = { eagle: 13, sparrow: 15, robin: 12, bluebird: 11 };
let sumOfAge = 0;
for (let age in ages) {
  sumOfAge += ages[age];
}
console.log("Third Task");
console.log(`Sum of Age : ${sumOfAge}`);
console.log("----------");
/**4th Task*/

const testArray = [1, 2, [3, 4, [5, 6], 7], 8, 9, [10, 11], 12];

let totalLength = 0;
function getLength(arr) {
  for (let ele in arr) {
    if (Array.isArray(arr[ele])) {
      getLength(arr[ele]);
    } else {
      totalLength++;
    }
  }
  return totalLength;
}
console.log("Forth Task");
console.log("Length of the array is", getLength([1, [2, [3, [4, [5, 6]]]]]));
//console.log("Length of the array is",getLength([1, [2, 3]]));
//console.log("Length of the array is",getLength([1, [2, [3, 4]]]));
