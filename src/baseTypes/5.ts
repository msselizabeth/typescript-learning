// Task
/* 
 How do you define a variable in TypeScript that can take a string or a number (union type)? And similarly, define a variable that can only take one of two string values: 'enable' or 'disable' (literal type)?
*/

// Solution
let union: string | number = "I am a string";
union = 43; // No error
// union = true; // Error because 'boolean' is not part of the union
let literal: "enable" | "disable" = "enable";
literal = "disable"; // No error
// literal = "something" // Error because "something" is not allowed