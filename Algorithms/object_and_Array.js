// Objects


let instructor = {
    firstName: "John",
    isInstructor: true,
    favoriteNumbers: [1, 2, 3],

}

console.log(instructor.firstName); // John
console.log(instructor.isInstructor); // true
console.log(instructor.favoriteNumbers); // [1, 2, 3]

console.log(Object.keys(instructor)); // O(n)
console.log(Object.values(instructor)); // O(n)
console.log(Object.entries(instructor)); // O(n)
console.log(instructor.hasOwnProperty("firstName")); // O(1)




// Arrays


let names = ["John", "Jane", "Jim", "Jack"];



console.log(names[0]); // John
console.log(names.length); // 4


names.push("Jill"); // O(1)
console.log(names); // ["John", "Jane", "Jim", "Jack", "Jill"]

names.pop(); // O(1)
console.log(names); // ["John", "Jane", "Jim", "Jack"]

names.unshift("Jill"); // O(n)
console.log(names); // ["Jill", "John", "Jane", "Jim", "Jack"]

names.shift(); // O(n)
console.log(names); // ["John", "Jane", "Jim", "Jack"]

names.splice(1, 2); // O(n)
console.log(names); // ["John", "Jack"]



