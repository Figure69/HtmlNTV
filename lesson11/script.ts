const user = {
  firstName: "alex",
  age: 30,
}as const;

type Person = typeof user;

type ReturnDoubleAgeOfPerson = (person: typeof user) => number;

const returnDoubleAgeOfPerson: ReturnDoubleAgeOfPerson = (person) => {
 return person.age * 2;
};

const age: number = 10;
const firstName: string = "alex";


const arrayOfNumbers = [1, 2 ,3 ,4 ,5, "asdf"] as const;

type NumberObject = Record<string, number>

const numberObject: NumberObject = {
foo: 10,
bar: 20,
};

type Organism = {
  alive: boolean;
}

type Animal = Organism & {
  legCount: number;
}


type Mammal = Animal & {
  warmBlooded: true;
  eyeCount: 2;
  nippleCount: number;
}

type Reptile = Animal & {
  warmBlooded: boolean;
  eyeCount: 2;
}

type Human = Mammal &{
  legCount: 2;
  nippleCount: 2;
  canStartFire: true;
}

const gunnsteinn: Human = {
  alive: true,
  canStartFire: true,
  eyeCount: 2,
  legCount: 2,
  nippleCount: 2,
  warmBlooded: true,

}