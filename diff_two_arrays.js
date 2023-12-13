/*
 *   Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both.
 *   In other words, return the symmetric difference of the two arrays.
 */

function diffArray(arr1, arr2) {
  let filteredArr = [];
  // Concatenate the two arrarys in a single one
  let newArr = arr1.concat(arr2);
  // Sorting the values of the new created array
  newArr.sort();
  // Making a while loop which will keep looping while newArr is true
  while (newArr.length > 0) {
    // The if else statement here will remove 2 values if they are the same, or remove one and add it to the final array if they aren't the same
    if (newArr[0] === newArr[1]) {
      newArr.splice(0, 2);
    } else if (newArr[0] != newArr[1]) {
      filteredArr.push(newArr.splice(0, 1));
    }
  }
  // .flat() will work the same as concat does, instead it will merge the subarrays in a single one
  return filteredArr.flat();
}

console.log(diffArray([1, "calf", 3, "piglet"], [7, "filly"]));
