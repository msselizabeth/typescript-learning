// Task
/*
  You have a type AllType. There is a compare function that takes two objects. These objects contain AllType fields.
  Your task is to use Pick and generics to indicate that the fields of these objects belong to AllType.
  The compare function should return AllType.
*/

type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};
// Solution
function compare(
  top: Pick<AllType, "name" | "color">,
  bottom: Pick<AllType, "position" | "weight">
): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}

export {};
