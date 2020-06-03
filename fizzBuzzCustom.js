// I: arg 1: string, arg 2: string, arg 3: int, arg 4: int
// O: [sequence of integers and strings]
// C: 
// E

// ('Hey', 'There')      -->  [ 1, 2, "Hey", 4, "There", "Hey", 7, 8, "There", "Hey", 11, "There", 13, 14... ]
// ('Foo', 'Bar', 2, 3)  -->  [ 1, "Foo", "Bar", "Foo", 5, "FooBar", 7, ... ]


// create arr of numbers 1-100
// create fizzBuzz function with 4 arg placeholders (str1, str2, int1, int2)
// create output arr
// iterate the numbers array
// check if the integers are divisible by either of int args
// if the int's are not divisible push to output arr
// if int is divisible replace the int with the str and push to output



// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 
// 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 
// 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45,
// 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61,
// 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78,
// 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95,
// 96, 97, 98, 99, 100 ]

const fizzBuzzCustom = (stringOne = 'Fizz', stringTwo = 'Buzz', numOne = 3, numTwo = 5) => {
    let arr = [];
    for (let i = 1; arr.length < 100; i++){
        if (i % numOne === 0 && i % numTwo === 0){
            arr.push(stringOne + stringTwo)
        } else if(i % numOne === 0){
            arr.push(stringOne)
        } else if (i % numTwo === 0){
            arr.push(stringTwo)
        } else {
            arr.push(i)
        }
    }
    return arr;

}
let test = fizzBuzzCustom('Hello', 'World', 2, 6);
console.log(test)