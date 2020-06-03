// Input: An array w/ array elements
// Output: single array
// Constraint: single array without array elements


// Input: [[1,2,3], [4,5,6], [7,8,9]]
// Output [1,2,3,4,5,6,7,8,9]

let array = [1, 2, [3], 4, [5, [6], 7]] //=> [1, 2, 3, 4, 5, 6, 7]

// Create a results array 
// Iterate through the outer array 
// Iterate through the first inner array
// Push inner array elements into the results array
// Iterate through outer array
// Iterate through inner array
// Push inner array elements into the results array
// Continue until outer array is empty

var singleArr = function (array) {
        var results = [];
        var helper = function (arr) {
            for (var i = 0; i < arr.length; i++) {
                if (!Array.isArray(arr[i])) {
                    results.push(arr[i]);
                } else {
                    helper(arr[i]);
                }

            }
        }
        helper(array);
            return results;
        }

        console.log(singleArr(array));

    
