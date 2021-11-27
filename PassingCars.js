function solution(array) {
  let eastBoundCarsSeen = 0;
  let passingCars = 0;

  for (const car of array) {
    if (car === 0) {
      eastBoundCarsSeen++;
    } else {
      passingCars += eastBoundCarsSeen;
    }
  }

  return passingCars > 1000000000 ? -1 : passingCars;
}

console.log(solution([0,1,0,1,1]));
