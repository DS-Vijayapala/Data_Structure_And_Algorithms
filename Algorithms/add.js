
// function add(n) {

//     let sum = 0;
//     for (let i = 1; i <= n; i++) {
//         sum += i;
//     }

//     return sum;

// }

// let t1 = performance.now();
// add(1000000000);
// let t2 = performance.now();

// console.log("Example 01 Time taken: " + (t2 - t1) + " milliseconds");



// function addtoup(n) {

//     return n * (n + 1) / 2;
// }

// let t3 = performance.now();
// addtoup(1000000000);
// let t4 = performance.now();

// console.log("Example 02 Time taken: " + (t4 - t3) + " milliseconds");


function logAtMost10(n) {
    for (var i = 1; i <= Math.min(n, 10); i++) {
        console.log(i);
    }
}

console.log(logAtMost10(5));


