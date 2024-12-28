// In TypeScript, the unknown type allows us to store any value, but we can assign an unknown variable directly to another variable if we are sure of its type. You have the following code:

// let some:unknown;
// some = 'Text';
// let str: string;
// str = some;
// What needs to be fixed in this code to make it correct and safe?


// Solution:
let some: unknown;
let str: string;
some = 'Text';
if (typeof some === "string") {
    str = some;
}

export {};