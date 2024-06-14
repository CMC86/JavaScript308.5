function sum(numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}

function average(numbers) {
    if (numbers.length === 0) return 0;
    return sum(numbers) / numbers.length;
}

function longestString(strings) {
    return strings.reduce((longest, str) => str.length > longest.length ? str : longest, '');
}

function stringsLongerThan(strings, length) {
    return strings.filter(str => str.length > length);
}

function printNumbers(n) {
    if (n <= 0) return;
    printNumbers(n - 1);
    console.log(n);
}

// Example usage:
const numbers = [1, 2, 3, 4, 5];
console.log('Sum:', sum(numbers));
console.log('Average:', average(numbers));
const strings = ['say', 'hello', 'in', 'the', 'morning'];
console.log('Longest String:', longestString(strings));
console.log('Strings Longer Than 3:', stringsLongerThan(strings, 3));
console.log('Print Numbers:');
printNumbers(5); // Each number printed on a new line in the console

// Data
const people = [
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "48", name: "Barry", occupation: "Runner", age: "25" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "7", name: "Bilbo", occupation: "None", age: "111" }
];

// Task 1: Sort the array by age
const sortedByAge = people.slice().sort((a, b) => a.age - b.age);

// Task 2: Filter the array to remove entries with an age greater than 50
const ageLessThan50 = people.filter(person => person.age <= 50);

// Task 3: Map the array to change the “occupation” key to “job” and increment every age by 1
const mappedData = people.map(person => ({
    id: person.id,
    name: person.name,
    job: person.occupation,
    age: parseInt(person.age) + 1
}));

// Task 4: Use the reduce method to calculate the sum of the ages
const sumOfAges = people.reduce((total, person) => total + parseInt(person.age), 0);

// Task 5: Calculate the average age
const averageAge = sumOfAges / people.length;

// Output the results
console.log("Sorted by age:", sortedByAge);
console.log("Ages less than or equal to 50:", ageLessThan50);
console.log("Mapped data with incremented age and 'job' key:", mappedData);
console.log("Sum of ages:", sumOfAges);
console.log("Average age:", averageAge);
