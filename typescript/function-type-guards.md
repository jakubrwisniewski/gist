# Function Type Guards

Type guards help narrow down types during runtime, providing dynamic type safety.


```ts
interface Bird {
  fly(): void;
  layEggs(): void;
}

interface Fish {
  swim(): void;
  layEggs(): void;
}

function isFish(pet: Bird | Fish): pet is Fish {
  return "swim" in pet;
}

function move(pet: Bird | Fish) {
  isFish(pet) ? pet.swim() : pet.fly();
}
```
