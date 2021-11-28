// O(N*log(N)) or O(N)
function solution(A) {
  let set = new Set();

  for (const a of A) {
    if (!set.has(a)) {
      set.add(a);
    }
  }
  return set.size;
}

solution([]);
