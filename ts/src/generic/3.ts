// Task
/*
  You have a merge function that combines two objects.
  Use generics to indicate that these objects can be of any type.
*/

// Solution
function merge<T, U>(objA: T, objB: U): T & U {
  return Object.assign({}, objA, objB);
}

// Using example
const result: {} = merge(
  { id: 1, name: "Cris", phone: "4165187970" },
  {
    id: 2,
    age: 32,
    hobbies: ["socer", "hockey"],
    favPlaces: [
      {
        placeName: "Shopping Mall",
        address: "456 Fryit Road",
      },
    ],
  }
);
console.log(result);

export {};
