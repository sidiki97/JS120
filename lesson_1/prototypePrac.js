

let fooA = { bar: 1 };
let fooB = Object.create(fooA);
let fooC = Object.create(fooB);

fooC['foo'] = 2;

console.log(fooA);
console.log(fooC);

// for (let property in fooA) {
//     console.log(`${property}: ${fooA[property]}`);
//   }



// let b = Object.getPrototypeOf(fooC);
// let a = Object.getPrototypeOf(b);
// let u = Object.getPrototypeOf(a);
// let i = Object.getPrototypeOf(u);

// let obj = {"a" : 1}




/*

input: 3 things (obj, key, val)
output: if key exists reassign to val (no literal output)

explicit:
if key does not exist no reassignment

datastructures:
n/a

algorithm

iterate each prototype
while loop 
condition: the current prototype (objects are truthy)

if (obj[key])
once you find object with key 
reassign that key
break loop
otherwise keep iterating until you hit null
assign condition to next prototype

*/


function assignProperty(obj = {}, key = '', val = 0) {
    let track = obj;
    while (obj) {
        if (obj[key]) {
            track = obj;
            // break;
        }
        obj = Object.getPrototypeOf(obj);

        
    }

    if (track[key]) {
        track[key] = val;
    } 

}

// assignProperty(fooC, "bar", 2);
// console.log(fooA.bar); // 2
// console.log(fooC.bar); // 2.
// console.log(fooA);
// console.log(fooC)

// assignProperty(fooC, "qux", 3);
// console.log(fooA.qux); // undefined
// console.log(fooC.qux); // undefined
// console.log(fooA.hasOwnProperty("qux")); // false
// console.log(fooC.hasOwnProperty("qux")); // false


