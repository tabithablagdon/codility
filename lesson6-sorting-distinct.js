/*
Lesson 6 - Sorting: Distinct 
Score: Correctioness - 100%, Performance - 100% (O(N*log(N)))

Task: Compute number of distinct values in an array.

Write a function solution(A) that, given a zero-indexed array A consisting of N integers, returns the number of distinct values in array A.

Assume that:
 - N is an integer within the range [0..100,000];
 - each element of array A is an integer within the range [−1,000,000..1,000,000].

For example, given array A consisting of six elements such that:

A[0] = 2    A[1] = 1    A[2] = 1
A[3] = 2    A[4] = 3    A[5] = 1
the function should return 3, because there are 3 distinct values appearing in array A, namely 1, 2 and 3.

Complexity: 
 - expected worst-case time complexity is O(N*log(N));
 - expected worst-case space complexity is O(N), beyond input storage (not counting the storage required for input arguments).

Elements of input arrays can be modified.
*/


function solution(A) {
  var len = A.length
     ,uniqCount = 1;
     
  if (len < 2) { // if length of A is 0 or 1, return that length as # of unique numbers
    return len;
  }
  
  A.sort(function(a, b) {  // sort array A in ascending order
    return a-b;
  });     
  
  for (var i = 1; i < len; i++) {
    if (A[i] === A[i-1]) {  //skip reptitive numbers
      continue;
    }
    uniqCount++;
  }
  
  return uniqCount;
}
