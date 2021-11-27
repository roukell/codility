// O(n*n)
function solution(A) {
  if (A.length === 0) return;
  if (A.length === 1) return A[0];

  let diffArr = [];

  for (let i = 1; i < A.length; i++) {
    // split array into two parts
    let leftArr = A.slice(0, i);
    let rightArr = A.slice(i);

    // find sum of left array
    let leftSum = leftArr.reduce((a, b) => a + b, 0);
    // find sum of right array
    let rightSum = rightArr.reduce((a, b) => a + b, 0);

    // find difference between left and right sum
    let diff = Math.abs(leftSum - rightSum);

    // push difference into array
    diffArr.push(diff);
  }

  // find minimum difference
  return Math.min(...diffArr);
}

//O(n) - only 92% accuracy
function solution1(A) {
  // sum all numbers in the array
  let numbersOnRight = A.reduce((a, b) => a + b, 0);
  let minDiff;
  let numbersOnLeft = 0;

  for (let i = 0; i < A.length; i++) {
    numbersOnRight -= A[i];
    numbersOnLeft += A[i];

    const diff = Math.abs(numbersOnLeft - numbersOnRight);

    if (A.length === 2) {
      minDiff = diff;
      break;
    }

    if (i === 0) {
      minDiff = diff;
    } else if (diff < minDiff) {
      minDiff = diff;
    }
  }

  return minDiff;
}

solution1([-10, -20, -30, -40, 100]); //20 (cannot get 20...?)
