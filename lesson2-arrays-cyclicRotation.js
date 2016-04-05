/*
LESSON 2: CyclicRotation - Rotate an array to the right by a given number of steps

SCORE: 100%

A zero-indexed array A consisting of N integers is given. Rotation of the array means that each element is shifted right by one index, and the last element of the array is also moved to the first place.

For example, the rotation of array A = [3, 8, 9, 7, 6] is [6, 3, 8, 9, 7]. The goal is to rotate array A K times; that is, each element of A will be shifted to the right by K indexes.

Write a function:

function arrayRotation(A, K);
that, given a zero-indexed array A consisting of N integers and an integer K, returns the array A rotated K times.

For example, given array A = [3, 8, 9, 7, 6] and K = 3, the function should return [9, 7, 6, 3, 8].

Assume that:

N and K are integers within the range [0..100];
each element of array A is an integer within the range [−1,000..1,000].
In your solution, focus on correctness. The performance of your solution will not be the focus of the assessment.
*/

var  arrayRotation = function(A, K) {
  var len = A.length;
  var newArr = Array(len);
  K = K<= len ? K : K % len; // if K > length of A, K equal to the remainder of K / length of A
  
  if (len <=1) return A;
  
  for (var i = 0; i < len; i++) {
    var newIndex;
    if (i + K >= len) newIndex = i + K - len;
    else newIndex = i + K;
    newArr[newIndex] = A[i];
  }
 
  return newArr; 
}

arrayRotation([1, 2, 3, 4, 5], 42);
// => [ 4, 5, 1, 2, 3 ]

arrayRotation([1, 2, 3, 4, 5], 3);
// => [ 3, 4, 5, 1, 2 ]
