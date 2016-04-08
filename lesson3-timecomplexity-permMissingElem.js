/*
LESSON 3 - Time Complexity: PermMissingElem - Find the missing element in a given permutation.
SCORE: Correctness 100%, Performance 100%

A zero-indexed array A consisting of N different integers is given. The array contains integers in the range [1..(N + 1)], 
which means that exactly one element is missing.

Your goal is to find that missing element.

Write a function:

function solution(A);
that, given a zero-indexed array A, returns the value of the missing element.

For example, given array A such that:

  A[0] = 2
  A[1] = 3
  A[2] = 1
  A[3] = 5
the function should return 4, as it is the missing element.

Assume that:

N is an integer within the range [0..100,000];
the elements of A are all distinct;
each element of array A is an integer within the range [1..(N + 1)].
Complexity:

expected worst-case time complexity is O(N);
expected worst-case space complexity is O(1), beyond input storage (not counting the storage required for input arguments).
Elements of input arrays can be modified.
*/

// #### Solution using XOR operator (less chance of overflow) ####

var missingElem2 = function(A){
  var missing = A.length + 1;
  for (var i = 0; i < A.length; i++) {
    missing = missing ^ A[i] ^ (i + 1);
  }
  return missing;
};

missingElem2([]);
// => 1
missingElem2([1, 3, 2]);
// => 4

// #### Solution using += ####

var missingElem1 = function(A) {
  var sumShouldBe = A.length + 1,
      sumIs = 0;
  for (var i = 0; i < A.length; i++) {
  	sumIs += A[i];
  	sumShouldBe += i+1;
  }
  return sumShouldBe - sumIs;
};

missingElem1([2, 3, 1, 5]);
// => 4
