function solution(A) {
  const arrLength = A.length;

  if (arrLength === 0) {
    return 1;
  } else {
    // find sum of all numbers from array[1] to array[n]
    const realSum = ((arrLength + 1) * (arrLength + 2)) / 2;

    // find sum of current array
    const missingSum = A.reduce((sum, e) => sum + e, 0);

    return realSum - missingSum;
  }
}

const result = solution([1, 2, 3, 5]);
console.log(result);
