import _ from 'lodash';

import User from "./person";
import { sortArray, filterArray, avgAge } from "./module";

const personOne = new User("Ratan", 35, "ratan@gmail.com");
const personTwo = new User("Tata", 37, "tata@gmail.com");

console.log(personOne.sayHello())
console.log(personTwo.sayHello())

const arrayOne = [2, 5, 6, 23, 48, 39, 71];
const arrayTwo = [
    { name: "Neelam Bailey", age: 21 },
    { name: "Anniyah Clemons", age: 34 },
    { name: "Fatma Saunders", age: 41 },
    { name: "Orla Carroll", age: 22 },
    { name: "Delores Castro", age: 24 },
    { name: "Anushka Marsh", age: 38 },
    { name: "Isabelle Downes", age: 24 },
    { name: "Beverly Weir", age: 27 },
]

// Sort array
console.log(sortArray(arrayOne))
// Filter array
console.log(filterArray(arrayTwo))
// Reduce and avg
console.log(avgAge(arrayTwo))


// Now with lodash
console.log("With Lodash")
const filteredArray = _.filter(arrayTwo, item => item.age < 30)
console.log(filteredArray)

const avAge = _.meanBy(arrayTwo, item => item.age).toFixed(2)
console.log(avAge)



// Counter
const clickCounter = (() => {
    let times = 0;

    return function () {
        times++;
        console.log(times)
    }
})()
console.log("Click Counter")
clickCounter()
clickCounter()
clickCounter()
clickCounter()
clickCounter()
clickCounter()



