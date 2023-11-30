
// before last want to add or 
// Examples: 1 or 2
// 1, 2, or 3

/*
Algorithm
if length of array is 2
just return elements with join operator (lastJoin variable)

Retrieve slice of array excluding last element
Join elements of the array slice using separator 
Add resulting string with lastJoin and last element

return resulting string

*/
function joinOr(array, separator = ', ', lastJoin = 'or') {
  if (array.length === 2) {
    console.log(array[0] + ' ' + lastJoin + ' ' + array[1]);
  }
  else {

    let beforeLast = array.slice(0, array.length - 1);
    let resultingString = beforeLast.join(separator) + separator + lastJoin + ' ' + array[array.length - 1];
  
    console.log(resultingString);
  }

}




// obj is the context for `joinOr`; replace it with the correct context.
joinOr([1, 2])                   //# => "1 or 2"
joinOr([1, 2, 3])                //# => "1, 2, or 3"
joinOr([1, 2, 3], '; ')          //# => "1; 2; or 3"
joinOr([1, 2, 3], ', ', 'and')   //# => "1, 2, and 3"