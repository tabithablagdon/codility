/*
 * LESSON 6 - Sorting: Triangle
 * SCORE: 100% Correctness, 100% Performance (O(N*log(N)) complexity)
 * 
 * Task: Determine whether a triangle can be built from a given set of edges.
 * 
 * A zero-indexed array A consisting of N integers is given. A triplet (P, Q, R) is triangular if 0 ≤ P < Q < R < N and:
 * A[P] + A[Q] > A[R],
 * A[Q] + A[R] > A[P],
 * A[R] + A[P] > A[Q].
 * 
 * For example, consider array A such that:
 *   A[0] = 10    A[1] = 2    A[2] = 5
 *   A[3] = 1     A[4] = 8    A[5] = 20
 * Triplet (0, 2, 4) is triangular.
 * 
 * Write a function solution(A);
 * that, given a zero-indexed array A consisting of N integers, returns 1 if there exists a triangular triplet for this array and returns 0 otherwise.
 * 
 * For example, given array A such that:
 * 
 *   A[0] = 10    A[1] = 2    A[2] = 5
 *   A[3] = 1     A[4] = 8    A[5] = 20
 *   
 * the function should return 1, as explained above. Given array A such that:
 * 
 *   A[0] = 10    A[1] = 50    A[2] = 5
 *   A[3] = 1
 *   
 * the function should return 0.
 * 
 * Assume that:
 *  - N is an integer within the range [0..100,000];
 *  - each element of array A is an integer within the range [−2,147,483,648..2,147,483,647].
 * Complexity:
 *  - expected worst-case time complexity is O(N*log(N));
 *  - expected worst-case space complexity is O(N), beyond input storage (not counting the storage required for input arguments).
 *  - Elements of input arrays can be modified.
*/

function solution(A) {
  var len = A.length;
  if (len < 3) { // if there are less than 3 edges, NOT triangular
    return 0;
  }
  
  A.sort(function(a, b) { // sort array A (quickSort preferred here if not using sort method
    return a - b;
  });
  
  for (var i = 2; i < len; i++) {
    var P = A[i-2]
      , Q = A[i-1]
      , R = A[i];
    if (P < 0) {
      continue;
    }
    if (R < P + Q) { // since array is sorted, only need to check if R < P + Q.  Other conditions hold true.
      return 1;
    }
  }
  return 0;
}
