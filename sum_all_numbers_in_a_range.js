/*
 *   We'll pass you an array of two numbers.
 *   Return the sum of those two numbers plus the sum of all the numbers between them.
 *   The lowest number will not always come first.
 */

// Solution 1 :
function sumAll(arr) {
  let firstNum = arr[0];
  let secondNum = arr[1];
  let result = 0;
  if (firstNum < secondNum) {
    while (firstNum <= secondNum) {
      result += firstNum;
      firstNum++;
    }
  } else if (secondNum < firstNum) {
    while (secondNum <= firstNum) {
      result += secondNum;
      secondNum++;
    }
  }
  return result;
}

console.log(sumAll([4, 1]));

/*
    Solution 2:
    function sumAll(arr) {
  let firstNum = arr[0];
  let secondNum = arr[1];
  let result = 0;
  if (firstNum < secondNum) {
    for (let i = firstNum; i <= secondNum; i++) {
      result += i;
    };
  }
    else if (secondNum < firstNum) {
      for (let i = secondNum; i <= firstNum; i++) {
      result += i;
    };
    }
    return result;
}

console.log(sumAll([4, 1]));
*/
