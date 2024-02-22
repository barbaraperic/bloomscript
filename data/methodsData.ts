export const methodsData = [
    {
        name: 'forEach',
        type: 'iterators',
        code: `const numbers = [1, 2, 3]; 
let sum = 0;

numbers.forEach(number => sum += number)

console.log(sum) // 6`,
        text: 'When you want to do something for each element of an array, array you do not want to edit. For example, sum numbers in an array.',
    },
    {
        name: 'map',
        type: 'iterators',
        code: `const drinks = ["tea", "coffee", "chai"]; 

const order = drinks.map(drink => "Hot" + drink)

console.log(order) // ["Hot tea", "Hot coffee", "Hot chai"]`,
        text: 'The function you pass to map() is invoked in the same way as a function passed to forEach(). For the map() method, however, the function you pass returns a value. Note that map() returns a new array: it does not modify the array it is invoked on. ',
    },

    {
        name: 'filter',
        type: 'iterators',
        code: `const numbers = [2, 4, 5, 6]; 

const evenNumbers = numbers.filter(number => number % 2 === 0)

console.log(evenNumbers) // [2, 4, 6]; `,
        text: 'When you want to filter the array to contain only the values that pass a specified criteria. Note that filter() returns a new array: it does not modify the array it is invoked on.',
    },
    {
        name: 'find',
        type: 'iterators',
        code: `const numbers = [1, -2, 3, -6]; 

const negative = numbers.find(number => number < 0)

console.log(negative) // [-2]`,
        text: 'find() is like filter() in that it iterates through an array looking for a (1) value that passes a specified criteria.',
    },
    {
        name: 'findIndex',
        type: 'iterators',
        code: `const numbers = [1, -2, 3, -6]; 

const negative = numbers.findIndex(number => number < 0)

console.log(negative) // 1`,
        text: 'findIndex() is like find() in that it iterates through an array looking for the value that passes a specified criteria but it returns its index, not the value.',
    },
    {
        name: 'every',
        type: 'iterators',
        code: `const numbers = [1, -2, 3, -4]; 

const arePositive = numbers.every(number => number > 0)

console.log(arePositive) // false`,
        text: 'every() returns true if and only if all the values pass a specified criteria.',
    },
    {
        name: 'some',
        type: 'iterators',
        code: `const numbers = [1, -2, 3, -4]; 

const someArePositive = numbers.some(number => number > 0)

console.log(someArePositive) // true`,
        text: 'it returns true if there exists at least one element in the array for which the predicate returns true and returns false if and only if the predicate returns false for all elements of the array',
    },
    {
        name: 'reduce',
        type: 'iterators',
        code: `const numbers = [1, 2, 3]; 

const sumOfNumbers = numbers.reduce((accumulator, currentValue) => {
    return accumulator += currentValue
}, 0)

console.log(sumOfNumbers) // 6`,
        text: 'methods combine the elements of an array, using the function you specify, to produce a single value',
    },
    {
        name: 'reduceRight',
        type: 'iterators',
        code: `const numbers = [[0, 1], [2, 3], [4, 5]]; 

const result = numbers.reduceRight((accumulator, currentValue) =>
  accumulator.concat(currentValue),
);

console.log(result) // [4, 5, 2, 3, 0, 1]`,
        text: 'works just like reduce(), except that it processes the array from highest index to lowest (right-to-left), rather than from lowest to highest. ',
    },
    {
        name: 'pop',
        type: 'stack-queue',
        code: `const numbers = [0, 1]; 

numbers.pop()

console.log(numbers) // [0]`,
        text: 'pop() deletes the last element of an array, decrements the array length, and returns the value that it removed',
    },
    {
        name: 'push',
        type: 'stack-queue',

        code: `const numbers = [0, 1]; 

numbers.push(2)

console.log(numbers) // [0, 1, 2]`,
        text: 'push() appends one or more new elements to the end of an array and returns the new length of the array.',
    },
    {
        name: 'shift',
        type: 'stack-queue',

        code: `const numbers = [2, 6]; 

numbers.shift()

console.log(result) // [6]`,
        text: 'shift() removes and returns the first element of the array, shifting all subsequent elements down one place to occupy the newly vacant space at the start of the array.',
    },
    {
        name: 'unshift',
        type: 'stack-queue',

        code: `const numbers = [2, 6]; 

numbers.unshift(4)

console.log(result) // [4, 2, 6]`,
        text: 'unshift() adds an element or elements to the beginning of the array, shifts the existing array elements up to higher indexes to make room, and returns the new length of the array.',
    },
]
