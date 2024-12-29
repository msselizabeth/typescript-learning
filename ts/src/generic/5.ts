// Task
/*
You need to implement the KeyValuePair interface, which describes a key-value pair.
Use generics so that this interface can work with any type of key and value.
*/

// Solution
interface KeyValuePair<T, U> {
  key: T;
  value: U;
}

// Example usage
function createKeyValuePair<T, U>(key: T, value: U): KeyValuePair<T, U> {
  return { key, value };
}
const pair1 = createKeyValuePair("name", "Alice"); 
const pair2 = createKeyValuePair("age", 35); 

console.log(pair1);
console.log(pair2);

const resultObject = {
  [pair1.key]: pair1.value,
  [pair2.key]: pair2.value,
};
console.log(resultObject);

export {};