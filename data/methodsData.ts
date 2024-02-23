export const methodsData = [
    {
        name: 'forEach',
        type: 'iterators',
        mutatesOriginalArray: false,
        code: `const numbers = [1, 2, 3]; 
let sum = 0;

numbers.forEach(number => sum += number) // => sum = 6`,
        text: 'forEach method iterates through an array, invoking a function you specify for each element.',
    },
    {
        name: 'map',
        type: 'iterators',
        mutatesOriginalArray: false,
        code: `const drinks = ["tea", "coffee", "chai"]; 

drinks.map(drink => "Hot" + drink) // => ["Hot tea", "Hot coffee", "Hot chai"]`,
        text: 'The function you pass to map() is invoked in the same way as a function passed to forEach(). For the map() method, however, the function you pass returns a value. Note that map() returns a new array: it does not modify the array it is invoked on. ',
    },

    {
        name: 'filter',
        type: 'iterators',
        mutatesOriginalArray: false,
        code: `const numbers = [2, 4, 5, 6]; 

numbers.filter(number => number % 2 === 0) // => [2, 4, 6];`,
        text: 'When you want to filter the array to contain only the values that pass a specified criteria. Note that filter() returns a new array: it does not modify the array it is invoked on.',
    },
    {
        name: 'find',
        type: 'iterators',
        mutatesOriginalArray: false,
        code: `const numbers = [1, -2, 3, -6]; 

const negative = numbers.find(number => number < 0) // => // [-2]`,
        text: 'find() is like filter() in that it iterates through an array looking for a (1) value that passes a specified criteria.',
    },
    {
        name: 'findIndex',
        type: 'iterators',
        mutatesOriginalArray: false,
        code: `const numbers = [1, -2, 3, -6]; 

const negative = numbers.findIndex(number => number < 0) // => 1`,
        text: 'findIndex() is like find() in that it iterates through an array looking for the value that passes a specified criteria but it returns its index, not the value.',
    },
    {
        name: 'every',
        type: 'iterators',
        mutatesOriginalArray: false,
        code: `const numbers = [1, -2, 3, -4]; 

numbers.every(number => number > 0) // => false`,
        text: 'every() returns true if and only if all the values pass a specified criteria.',
    },
    {
        name: 'some',
        type: 'iterators',
        mutatesOriginalArray: false,
        code: `const numbers = [1, -2, 3, -4]; 

numbers.some(number => number > 0) // => true`,
        text: 'it returns true if there exists at least one element in the array for which the predicate returns true and returns false if and only if the predicate returns false for all elements of the array',
    },
    {
        name: 'reduce',
        type: 'iterators',
        mutatesOriginalArray: false,
        code: `const numbers = [1, 2, 3]; 

const sumOfNumbers = numbers.reduce((accumulator, currentValue) => {
    return accumulator += currentValue
}, 0) // => 6`,
        text: 'methods combine the elements of an array, using the function you specify, to produce a single value',
    },
    {
        name: 'reduceRight',
        type: 'iterators',
        mutatesOriginalArray: false,
        code: `const numbers = [[0, 1], [2, 3], [4, 5]]; 

const result = numbers.reduceRight((accumulator, currentValue) =>
  accumulator.concat(currentValue),
); // => [4, 5, 2, 3, 0, 1]`,
        text: 'works just like reduce(), except that it processes the array from highest index to lowest (right-to-left), rather than from lowest to highest. ',
    },
    {
        name: 'pop',
        type: 'stack-queue',
        mutatesOriginalArray: true,
        code: `const numbers = [0, 1]; 

numbers.pop() // [0]`,
        text: 'pop() deletes the last element of an array, decrements the array length, and returns the value that it removed',
    },
    {
        name: 'push',
        type: 'stack-queue',
        mutatesOriginalArray: true,
        code: `const numbers = [0, 1]; 

numbers.push(2) // => [0, 1, 2]`,
        text: 'push() appends one or more new elements to the end of an array and returns the new length of the array.',
    },
    {
        name: 'shift',
        type: 'stack-queue',
        mutatesOriginalArray: true,
        code: `const numbers = [2, 6]; 

numbers.shift() // [6]`,
        text: 'shift() removes and returns the first element of the array, shifting all subsequent elements down one place to occupy the newly vacant space at the start of the array.',
    },
    {
        name: 'unshift',
        type: 'stack-queue',
        mutatesOriginalArray: true,
        code: `const numbers = [2, 6]; 

numbers.unshift(4) // => [4, 2, 6]`,
        text: 'unshift() adds an element or elements to the beginning of the array, shifts the existing array elements up to higher indexes to make room, and returns the new length of the array.',
    },
    {
        name: 'indexOf',
        type: 'search-sort',
        mutatesOriginalArray: false,
        code: `const numbers = [2, 6, 1, 2, 1, 0]; 

numbers.indexOf(2) // => 0: a[2] is 0
numbers.indexOf(3) // => -1: no element has value 3`,
        text: 'indexOf() searchs an array for an element with a specified value and return the index of the first such element found, or -1 if none is found.',
    },
    {
        name: 'lastIndexOf',
        type: 'search-sort',
        mutatesOriginalArray: false,
        code: `const numbers = [2, 6, 1, 2, 1, 0]; 

numbers.indexOf(2) // => 3: a[2] is 3`,
        text: 'lastIndexOf() searches an array for an element with a specified value and return the index of the first such element found, or -1 if none is found. lastIndexOf() searches from end to beginning.',
    },
    {
        name: 'includes',
        type: 'search-sort',
        mutatesOriginalArray: false,
        code: `const numbers = [1, true, 3, NaN];

numbers.includes(true) // => true
numbers.includes(2) // => false,
numbers.includes(NaN) // => true`,
        text: 'takes a single argument and returns true if the array contains that value or false otherwise. It does not tell you the index of the value, only whether it exists.',
    },
    {
        name: 'sort',
        type: 'search-sort',
        mutatesOriginalArray: true,
        code: `const fruits = ["banana", "cherry", "apple"];

fruist.sort() // => ["apple", "banana", "cherry"];`,
        text: 'sort() sorts the elements of an array in place and returns the sorted array. When sort() is called with no arguments, it sorts the array elements in alphabetical order.',
    },
    {
        name: 'reverse',
        type: 'search-sort',
        mutatesOriginalArray: true,
        code: `const numbers = [2, 6, 1]; 

numbers.reverse() // => [1, 6, 2]`,
        text: 'The reverse() method reverses the order of the elements of an array and returns the reversed array.',
    },
    {
        name: 'slice',
        type: 'extract-insert',
        mutatesOriginalArray: false,
        code: `const numbers = [1, 2, 6, 3, 4]; 

numbers.slice(3) // return [3, 4]
numbers.slice(1, -1) // return [2, 6, 3]`,
        text: 'The slice() method returns a slice, or subarray, of the specified array. Its two arguments specify the start and end of the slice to be returned.',
    },
    {
        name: 'splice',
        type: 'extract-insert',
        mutatesOriginalArray: true,
        code: `const months = ['Jan', 'March', 'April', 'June']; 

months.splice(4, 1, "May") // replaces 1 element at index 4

console.log(months) // ["Jan", "Feb", "March", "April", "May"]`,
        text: 'splice() can delete elements from an array, insert new elements into an array, or perform both operations at the same time.',
    },
    {
        name: 'fill',
        type: 'extract-insert',
        mutatesOriginalArray: true,
        code: `const array = new Array(5);  // start with no elements and length 5

array.fill(0) // => [0,0,0,0,0]; fill the array with zeros
`,
        text: 'The fill() method sets the elements of an array, or a slice of an array, to a specified value. It mutates the array it is called on, and also returns the modified array.',
    },
    {
        name: 'copyWithin',
        type: 'extract-insert',
        mutatesOriginalArray: false,
        code: `const numbers = [1, 2, 3, 4, 5];

numbers.copyWithin(1) // => [1, 1, 2, 3, 4]: copy array elements up one`,
        text: 'copyWithin() copies a slice of an array to a new position within the array. It modifies the array in place and returns the modified array, but it will not change the length of the array.',
    },
]
