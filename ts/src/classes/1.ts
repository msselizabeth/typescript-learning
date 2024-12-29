/*
  A Student class that contains three properties: name, age, and grade.
  Instead of declaring these properties in the class body, then in the   constructor, and finally assigning values ​​to them,
  write a shorthand initialization.
*/

// class Student {
//   public name: string;
//   public age: number;
//   public grade: string;

//   constructor(name: string, age: number, grade: string) {
//     this.name = name;
//     this.age = age;
//     this.grade = grade;
//   }
// }

// Solution
class Student{
  constructor(public name: string, public age: number, public grade: string){}
}

const student = new Student("Tom", 22, "B");
console.log(student);

