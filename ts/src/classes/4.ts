/**
 * In this task, you have to implement a real-life scenario where a person, a key, and a house interact with each other.
 * 
 * Key: Create a Key class. It should have one private signature property, which is randomly generated when an object of this class is created (for example, Math.random()). This class should also have a getSignature method, which returns the value of the signature property.
 * 
 * Person: Create a Person class. The constructor of this class takes an object of the Key class and stores them in the private key property. The Person class should have a getKey method, which returns the stored key.
 * 
 * House: Create an abstract House class. This class has two properties: door, which can be open (true) or closed (false), and key, which stores an object of the Key class. This class should also have a comeIn method, which adds an object of the Person class to the tenants array if the door is open. Your abstract House class should also have an abstract OpenDoor method, which accepts an object of the Key class.
 * 
 * My House: Create a class MyHouse that inherits from the abstract class House. Implement the openDoor method in this class. If the key passed to this method matches the key stored as key, the door opens.
 * 
 * After implementing all the classes, create objects for each class and try to recreate the scenario in which a person comes home.
*/

class Key {
  private signature: number;
  constructor() {
    this.signature = parseFloat((Math.random() * 100).toFixed(2));
  }

  getSignature(): number {
    return this.signature;
  }
}

class Person {
  private key: Key;
  constructor(key: Key) {
    this.key = key;
  }
  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  public door: boolean;
  protected key: Key;
  public tenants: Person[];

  constructor( key: Key) {
    this.door = false;
    this.key = key;
    this.tenants = [];
  }

  comeIn(person: Person): void {
    if (this.door === true) {
      this.tenants.push(person);
      console.log(`${person.getKey().getSignature()} has entered the house.`);
    } else {
        console.log("The door is closed. Cannot come in.");
    }
    
  }
  abstract OpenDoor(key: Key): void;
}

class MyHouse extends House {
  OpenDoor(key: Key): void {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
      console.log("The door is now open!");
    } else {
        console.log("The key doesn't match. The door remains closed.");
    }
    
  }
}

// Example usage
const key = new Key();
console.log(key);

const house = new MyHouse(key);
const person = new Person(key);
console.log(person.getKey().getSignature())

house.OpenDoor(person.getKey());

house.comeIn(person);

console.log(house.tenants)
