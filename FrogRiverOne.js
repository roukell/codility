function solution(X, A) {
  // check if array is empty, if yes return -1;
  if (A.length === 0) return -1;

  // create an array with X + 1 elements
  let leafPositionArr = [...Array(X + 1).keys()];
  console.log(leafPositionArr);

  // loop through array A, if the value is in the array, remove it from leafPositionArr
  for (let i = 0; i < A.length; i++) {
    const leafPosition = A[i];

    // if leafPosition is in leafPositionArr, remove it from leafPositionArr
    if (leafPositionArr.includes(leafPosition)) {
      leafPositionArr.splice(leafPositionArr.indexOf(leafPosition), 1);
    }

    // if leafPositionArr is left with 0, return i
    if (leafPositionArr.length === 1 && leafPositionArr[0] === 0) {
      console.log(i);
      return i;
    }
  }

  // if frog never cross the river return -1
  console.log(-1);
  return -1;
}

solution(5, [1, 3, 1, 4, 2, 3, 5, 4]);
solution(5, [3]); //single
