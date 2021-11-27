function solution(array, roundsOfRotation) {
  // check the range of the inputs
  if (array.length < 0 > array.length > 100 || roundsOfRotation < 0 || roundsOfRotation > 100 || roundsOfRotation === null || roundsOfRotation === undefined) {
    console.log('input out of range');
    return;
  }

  // check if the array is empty
  if (array.length === 0) return array;

  // check the range of elements in the array
  for (const element of array) {
    if (element < -1000 || element > 1000) {
      console.log('element out of range');
      return;
    }
  }

  while (roundsOfRotation > 0) {
    // get the last element of the array and remove it
    const lastElement = array.pop();
    console.log(`lastElement = ${lastElement}`);

    // add the last element to the front of the array
    array.unshift(lastElement);
    console.log(`current array = ${array}`);

    roundsOfRotation--;
  }

  return array;
}

solution([], 3);
