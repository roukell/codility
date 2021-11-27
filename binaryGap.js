function solution(num) {
  // make sure num is within the range
  if (num < 1 || num > 2147483647) return 0;

  // make sure num is integer
  if (num === parseInt(num, 10)) {
    // convert to binary
    const binary = num.toString(2);
    console.log(`This is your binary: ${binary}`);

    const binaryArr = binary.split('');
    let started = false;
    let counter = 0;
    let maxCount = 0;

    for (i = 0; i < binaryArr.length; i++) {
      const current = binaryArr[i];

      if (current === '1') {
        if (started) {
          if (counter > maxCount) {
            maxCount = counter;
          }
        }

        counter = 0;
        started = true;
      }

      if (current === '0') {
        counter++;
      }
    }

    console.log(maxCount);
    return maxCount;
  };
};

solution(6);
solution(328);
