import pipe from 'lodash/fp/pipe.js'
import {Map} from "immutable";
import { produce } from 'immer'
import * as resolve from "./src/actions.js";

const wrap = type => html => `<${type}>${html}<${type}>`
const toLowerCase = str => str.toLowerCase()
const trim = str => str.trim()

const transform = pipe(trim, toLowerCase, wrap('div'));

console.log(transform('  HELLO  '))

// immutable

const person = {name:'John', age: 20, address: {city: 'New York', country: 'USA'}}

const personTwo = Object.assign({}, person, {age: 30})
const personThree = {...person, age: 30, address: {}} //for

console.log(personTwo)
console.log(personThree)

// updating arrays

const numbers = [1,2,3,4,5];
//Adding

const added = [...numbers, 6];
const index = numbers.indexOf(2);
const addedMiddle = [...numbers.slice(0, index), 6, ...numbers.slice(index)];
console.log(addedMiddle)
console.log(added)

//Removing

const removed = numbers.filter(n => n !== 2);
console.log(removed)

//Updating

const updated = numbers.map(n => n === 2 ? 20 : n);
console.log(updated)

//Without immutable library

let book = {title: 'Harry Potter'};

function publish(book) {
    return book.isPublished = true;
}

publish(book);
console.log(book)

//With immutable js

let book2 = Map({title: 'Harry Potter'});
function publish2(book) {
    return book.set('isPublished', true);
}

book2 = publish2(book2);
console.log(book2.toJS())

//With immer

let book3 = {title: 'Harry Potter'};

function publish3(book) {
    return produce(book, newBook => {
        newBook.isPublished = false;
    })
}

let updatedBook3 = publish3(book3);

console.log(book3)
console.log(updatedBook3)

// Redux
import store from "./src/store.js";

console.log(store.getState())

//Store subscription with unsubscribe function returned

// const unsubscribe = store.subscribe(() => {
//     console.log('Store changed!', store.getState())
// });

// store subscribe without unsubscribe function returned
store.subscribe(() => {
    console.log('Store changed!', store.getState())
});


store.dispatch(resolve.bugAdded('Bug 1'));

store.dispatch(resolve.bugResolved(1));

store.dispatch(resolve.bugRemoved(1))
